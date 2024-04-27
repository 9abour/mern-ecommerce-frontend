"use client";

import React, { FormEvent } from "react";
import Form from "@/components/common/form/Form";
import useHandleFormInputChange from "@/components/common/form/hooks/useHandleFormInputChange";
import generateZodSchema from "@/helpers/zod/generateZodSchema";
import useHandleNotifications from "@/hooks/useHandleNotifications";
import { useMutation } from "react-query";
import useFormValidation from "@/components/common-layout/form/hooks/useFormValidation";
import {
	singInFormILinksData,
	singInFormInputsData,
	singInFormSubmitText,
} from "@/components/common-layout/form/data/signInFormData";
import signInMutation from "@/components/common-layout/form/mutations/signIn";

const SignIn = () => {
	const { formValues, onFormValueChange } = useHandleFormInputChange();

	const schema = generateZodSchema(singInFormInputsData);

	const { validationErrors, checkFormValidation } = useFormValidation(
		schema,
		formValues
	);

	const { sendNotifications } = useHandleNotifications();

	const mutation = useMutation(() => signInMutation(formValues), {
		onError: error => {
			sendNotifications(error, null);
		},
		onSuccess: data => {
			sendNotifications(null, data);

			setTimeout(() => {
				window.location.replace("/");
			}, 500);
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
			title="Welcome Back"
			inputs={singInFormInputsData}
			submitText={singInFormSubmitText}
			submitFunc={handleSubmit}
			links={singInFormILinksData}
			onFormValueChange={onFormValueChange}
			validationErrors={validationErrors}
			isLoading={mutation.isLoading}
		/>
	);
};

export default SignIn;
