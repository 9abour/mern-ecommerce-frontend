"use client";

import Form from "@/components/common/form/Form";
import React from "react";
import {
	signUpFormIHandleSubmitData,
	signUpFormILinksData,
	signUpFormInputsData,
} from "../data/SignUpData";

const SignUp = () => {
	return (
		<Form
			title="Create Account"
			inputs={signUpFormInputsData}
			handleSubmit={signUpFormIHandleSubmitData}
			links={signUpFormILinksData}
		/>
	);
};

export default SignUp;
