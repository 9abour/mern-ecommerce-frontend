"use client";

import Form from "@/components/common/form/Form";
import React, { FormEvent } from "react";

import useHandleFormInputChange from "@/components/common/form/hooks/useHandleFormInputChange";
import generateZodSchema from "@/helpers/zod/generateZodSchema";
import useHandleNotifications from "@/hooks/useHandleNotifications";
import {
	signUpFormILinksData,
	signUpFormISubmitText,
	signUpFormInputsData,
} from "@/components/common-layout/form/data/signUpData";
import useFormValidation from "@/components/common-layout/form/hooks/useFormValidation";
import { useMutation } from "react-query";
import signUpMutation from "@/components/common-layout/form/mutations/signUp";

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
