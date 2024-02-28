import AUTH from "@/enums/auth.enum";
import { SignUpMutationArgs } from "./../types/index.types";
import HandleApiRequests from "@/helpers/handleApiRequests";

const signUpMutation = async (formValues: SignUpMutationArgs) => {
	const data = await HandleApiRequests.handleApiRequest({
		method: "POST",
		body: formValues,
		endpoint: AUTH.REGISTER,
	});

	return data;
};

export default signUpMutation;
