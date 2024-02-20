"use client";

import Form from "@/components/common/form/Form";
import React, { FormEvent } from "react";
import {
	signUpFormILinksData,
	signUpFormISubmitText,
	signUpFormInputsData,
} from "../data/SignUpData";
import useHandleFormInputChange from "@/components/common/form/hooks/useHandleFormInputChange";
import generateZodSchema from "@/helpers/generateZodSchema";
import useFormValidation from "@/hooks/useFormValidation";

const SignUp = () => {
	const { formValues, onFormValueChange } = useHandleFormInputChange();
	const schema = generateZodSchema(signUpFormInputsData, [{ condition: formValues.password == formValues.confirmPassword,
		msg: "Passwords don't match",
		path: ["confirmPassword"]
	}]);

	const {validationErrors, checkFormValidation} = useFormValidation(schema, formValues);

	
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		checkFormValidation();
	}

	return (
		<Form
			title="Create Account"
			inputs={signUpFormInputsData}
			submitText={signUpFormISubmitText}
			submitFunc={handleSubmit}
			links={signUpFormILinksData}
			onFormValueChange={onFormValueChange}
			validationErrors={validationErrors}
		/>
	);
};

export default SignUp;
