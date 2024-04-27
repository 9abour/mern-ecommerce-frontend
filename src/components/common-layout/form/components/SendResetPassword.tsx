"use client";

import React, { FormEvent } from "react";
import {
	sendResetPasswordFormILinksData,
	sendResetPasswordFormInputsData,
} from "../data/sendResetPasswordFormData";
import useHandleFormInputChange from "@/components/common/form/hooks/useHandleFormInputChange";
import generateZodSchema from "@/helpers/zod/generateZodSchema";
import Form from "@/components/common/form/Form";
import { useMutation } from "react-query";
import useHandleNotifications from "@/hooks/useHandleNotifications";
import sendResetPassword from "@/components/common-layout/form/mutations/sendResetPassword";
import useFormValidation from "@/components/common-layout/form/hooks/useFormValidation";

const SendResetPasswordForm = () => {
	const { formValues, onFormValueChange } = useHandleFormInputChange();

	const schema = generateZodSchema(sendResetPasswordFormInputsData);

	const { validationErrors, checkFormValidation } = useFormValidation(
		schema,
		formValues
	);

	const { sendNotifications } = useHandleNotifications();

	const mutation = useMutation(() => sendResetPassword(formValues), {
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
			title="Reset Password"
			inputs={sendResetPasswordFormInputsData}
			submitText="Send"
			submitFunc={handleSubmit}
			onFormValueChange={onFormValueChange}
			links={sendResetPasswordFormILinksData}
			validationErrors={validationErrors}
			isLoading={mutation.isLoading}
		/>
	);
};

export default SendResetPasswordForm;
