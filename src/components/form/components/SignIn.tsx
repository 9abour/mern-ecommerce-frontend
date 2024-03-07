import React, { FormEvent } from "react";
import Form from "@/components/common/form/Form";
import useFormValidation from "@/components/form/hooks/useFormValidation";
import useHandleFormInputChange from "@/components/common/form/hooks/useHandleFormInputChange";
import generateZodSchema from "@/helpers/generateZodSchema";
import useHandleNotifications from "@/hooks/useHandleNotifications";
import { useMutation } from "react-query";
import signInMutation from "@/components/form/mutations/signIn";
import {
	singInFormILinksData,
	singInFormInputsData,
	singInFormSubmitText,
} from "@/components/form/data/signInFormData";

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
			window.location.replace("/");
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