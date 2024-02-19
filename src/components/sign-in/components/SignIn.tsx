"use client";

import React from "react";
import Form from "@/components/common/form/Form";
import {
	singInFormILinksData,
	singInFormInputsData,
	singInFormSubmitText
} from "../data/SignInFormData";

const SignIn = () => {
	return (
		<Form
			title="Welcome Back"
			inputs={singInFormInputsData}
			submitText={singInFormSubmitText}
			submitFunc={() => {}}
			links={singInFormILinksData}
			onFormValueChange={() => {}}
		/>
	);
};

export default SignIn;
