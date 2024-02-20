"use client";

import Form from "@/components/common/form/Form";
import React, { FormEvent, useEffect, useState } from "react";
import {
	signUpFormILinksData,
	signUpFormISubmitText,
	signUpFormInputsData,
} from "../data/SignUpData";
import useHandleFormInputChange from "@/components/common/form/hooks/useHandleFormInputChange";
import { useQuery } from "react-query";
import HandleApiRequests from "@/helpers/handleApiRequests";
import AUTH from "@/enums/auth.enum";
import generateZodSchema from "@/helpers/generateZodSchema";
import { ZodError, ZodIssue } from "zod";

const SignUp = () => {
	const { formValues, onFormValueChange } = useHandleFormInputChange();
	const [validationErrors, setValidationErrors] = useState<ZodIssue[]>([]);

	console.log(validationErrors)

	const schema = generateZodSchema(signUpFormInputsData, [{ condition: formValues.password == formValues.confirmPassword,
		msg: "Passwords don't match",
		path: ["confirmPassword"]
	}]);
	
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		try {
			schema.parse(formValues);
			setValidationErrors([])

		} catch (err) {
			if (err instanceof Error) {
				const errorsStr = err.toString()
				const errorsObj = JSON.parse(errorsStr);

				setValidationErrors(errorsObj)
			}
				
		}
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
