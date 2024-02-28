"use client";

import Form from "@/components/common/form/Form";
import React, { FormEvent } from "react";

import useHandleFormInputChange from "@/components/common/form/hooks/useHandleFormInputChange";
import generateZodSchema from "@/helpers/generateZodSchema";
import useFormValidation from "@/components/form/hooks/useFormValidation";
import { useMutation } from "react-query";
import useHandleNotifications from "@/hooks/useHandleNotifications";
import {
	signUpFormILinksData,
	signUpFormISubmitText,
	signUpFormInputsData,
} from "@/components/form/data/SignUpData";
import signUpMutation from "@/components/form/helpers/signUpMutation";

const SignUp = () => {
	const { formValues, onFormValueChange } = useHandleFormInputChange();

	const schema = generateZodSchema(signUpFormInputsData, [
		{
			condition: formValues.password == formValues.confirmPassword,
			msg: "Passwords don't match",
			path: ["confirmPassword"],
		},
	]);

	const { validationErrors, checkFormValidation } = useFormValidation(
		schema,
		formValues
	);
	const { sendNotifications } = useHandleNotifications();

	const mutation = useMutation(() => signUpMutation(formValues), {
		onError: error => {
			console.log(error);
			sendNotifications(error, null);
		},
		onSuccess: data => {
			sendNotifications(null, data);
		},
	});

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (await checkFormValidation()) {
			mutation.mutate();
		}
	};

	return (
		<Form
			title="Create Account"
			inputs={signUpFormInputsData}
			submitText={signUpFormISubmitText}
			submitFunc={handleSubmit}
			links={signUpFormILinksData}
			onFormValueChange={onFormValueChange}
			validationErrors={validationErrors}
			isLoading={mutation.isLoading}
		/>
	);
};

export default SignUp;
