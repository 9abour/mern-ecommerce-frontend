"use client";

import React, { FormEvent } from "react";
import Form from "@/components/common/form/Form";
import {
	singInFormILinksData,
	singInFormInputsData,
	singInFormSubmitText,
} from "../data/SignInFormData";
import useFormValidation from "@/components/form/hooks/useFormValidation";
import useHandleFormInputChange from "@/components/common/form/hooks/useHandleFormInputChange";
import generateZodSchema from "@/helpers/generateZodSchema";

const SignIn = () => {
	const { formValues, onFormValueChange } = useHandleFormInputChange();

	const schema = generateZodSchema(singInFormInputsData);

	const { validationErrors, checkFormValidation } = useFormValidation(
		schema,
		formValues
	);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		checkFormValidation();
	};

	return (
		<Form
			title="Welcome Back"
			inputs={singInFormInputsData}
			submitText={singInFormSubmitText}
			submitFunc={handleSubmit}
			links={singInFormILinksData}
			onFormValueChange={onFormValueChange}
			validationErrors={validationErrors}
		/>
	);
};

export default SignIn;
