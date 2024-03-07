"use client";

import {
	resetPasswordFormData,
	resetPasswordFormInputsData,
} from "@/components/common-layout/form/data/resetPassword";
import useFormValidation from "@/components/common-layout/form/hooks/useFormValidation";
import resetPassword from "@/components/common-layout/form/mutations/resetPassword";
import Form from "@/components/common/form/Form";
import useHandleFormInputChange from "@/components/common/form/hooks/useHandleFormInputChange";

import generateZodSchema from "@/helpers/generateZodSchema";
import useHandleNotifications from "@/hooks/useHandleNotifications";
import { useParams } from "next/navigation";
import React, { FormEvent } from "react";
import { useMutation } from "react-query";

const ResetPassword = () => {
	const { formValues, onFormValueChange } = useHandleFormInputChange();
	const { token } = useParams();

	const schema = generateZodSchema(resetPasswordFormInputsData, [
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

	const mutation = useMutation(() => resetPassword(formValues, token), {
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
			inputs={resetPasswordFormInputsData}
			submitText="Send"
			submitFunc={handleSubmit}
			onFormValueChange={onFormValueChange}
			links={resetPasswordFormData}
			validationErrors={validationErrors}
			isLoading={mutation.isLoading}
		/>
	);
};

export default ResetPassword;
