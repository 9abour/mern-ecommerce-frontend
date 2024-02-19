"use client";

import Form from "@/components/common/form/Form";
import React from "react";
import {
	sendResetPasswordFormIHandleSubmitData,
	sendResetPasswordFormILinksData,
	sendResetPasswordFormInputsData,
} from "../data/SendResetPasswordFormData";

const SendResetPasswordForm = () => {
	return (
		<Form
			title="Reset Password"
			inputs={sendResetPasswordFormInputsData}
			handleSubmit={sendResetPasswordFormIHandleSubmitData}
			links={sendResetPasswordFormILinksData}
		/>
	);
};

export default SendResetPasswordForm;
