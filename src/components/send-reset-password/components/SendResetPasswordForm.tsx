"use client";

import Form from "@/components/common/form/Form";
import React from "react";
import {
	sendResetPasswordFormILinksData,
	sendResetPasswordFormInputsData,
} from "../data/SendResetPasswordFormData";

const SendResetPasswordForm = () => {
	return (
		<Form
			title="Reset Password"
			inputs={sendResetPasswordFormInputsData}
			submitText="Send"
			submitFunc={() => {}}
			onFormValueChange={() => {}}
			links={sendResetPasswordFormILinksData}
		/>
	);
};

export default SendResetPasswordForm;
