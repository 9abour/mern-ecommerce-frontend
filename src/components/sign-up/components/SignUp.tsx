"use client";

import Form from "@/components/common/form/Form";
import React, { FormEvent, useEffect, useState } from "react";
import {
	signUpFormILinksData,
	signUpFormISubmitText,
	signUpFormInputsData,
} from "../data/SignUpData";
import useHandleFormInputChange from "@/components/common/form/hooks/useHandleFormInputChange";
import { useQuery } from "react-query";
import HandleApiRequests from "@/helpers/handleApiRequests";
import AUTH from "@/enums/auth.enum";
import generateZodSchema from "@/helpers/generateZodSchema";
import { z } from "zod";

const SignUp = () => {
	const { formValues, onFormValueChange } = useHandleFormInputChange();

	const { schema } = generateZodSchema(signUpFormInputsData,
		[{ condition: formValues.password === formValues.confirmPassword, msg: "Passwords don't match" }]
	);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		try {
			schema.parse(formValues);

		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Form
			title="Create Account"
			inputs={signUpFormInputsData}
			submitText={signUpFormISubmitText}
			submitFunc={handleSubmit}
			links={signUpFormILinksData}
			onFormValueChange={onFormValueChange}
		/>
	);
};

export default SignUp;
