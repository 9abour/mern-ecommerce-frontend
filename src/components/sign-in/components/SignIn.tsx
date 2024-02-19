"use client";

import React from "react";
import Form from "@/components/common/form/Form";
import {
	singInFormIHandleSubmitData,
	singInFormILinksData,
	singInFormInputsData,
} from "../data/SignInFormData";

const SignIn = () => {
	return (
		<Form
			title="Welcome Back"
			inputs={singInFormInputsData}
			handleSubmit={singInFormIHandleSubmitData}
			links={singInFormILinksData}
		/>
	);
};

export default SignIn;
