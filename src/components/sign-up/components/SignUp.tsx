"use client";

import Form from "@/components/common/form/Form";
import React from "react";
import {
	signUpFormIHandleSubmitData,
	signUpFormILinksData,
	signUpFormInputsData,
} from "../data/SignUpData";
import useHandleFormInputChange from "@/components/common/form/hooks/useHandleFormInputChange";
const SignUp = () => {
	const { formValues, onFormValueChange } = useHandleFormInputChange();

	return (
		<Form
			title="Create Account"
			inputs={signUpFormInputsData}
			handleSubmit={signUpFormIHandleSubmitData}
			links={signUpFormILinksData}
			onFormValueChange={onFormValueChange}
		/>
	);
};

export default SignUp;
