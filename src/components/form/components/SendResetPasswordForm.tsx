"use client";

import React, { FormEvent } from "react";
import {
	sendResetPasswordFormILinksData,
	sendResetPasswordFormInputsData,
} from "../data/SendResetPasswordFormData";
import useHandleFormInputChange from "@/components/common/form/hooks/useHandleFormInputChange";
import generateZodSchema from "@/helpers/generateZodSchema";
import useFormValidation from "@/components/form/hooks/useFormValidation";
import Form from "@/components/common/form/Form";

const SendResetPasswordForm = () => {
	const { formValues, onFormValueChange } = useHandleFormInputChange();

	const schema = generateZodSchema(sendResetPasswordFormInputsData);

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
			title="Reset Password"
			inputs={sendResetPasswordFormInputsData}
			submitText="Send"
			submitFunc={handleSubmit}
			onFormValueChange={onFormValueChange}
			links={sendResetPasswordFormILinksData}
			validationErrors={validationErrors}
		/>
	);
};

export default SendResetPasswordForm;
