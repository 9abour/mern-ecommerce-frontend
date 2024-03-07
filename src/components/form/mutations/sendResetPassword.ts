import { BodyKeyValue } from "@/components/form/types/index.types";
import AUTH from "@/enums/auth.enum";
import HandleApiRequests from "@/helpers/handleApiRequests";

const sendResetPassword = async (formValues: BodyKeyValue) => {
	const data = await HandleApiRequests.handleApiRequest({
		method: "PATCH",
		body: formValues,
		endpoint: AUTH.SEND_RESET_PASSWORD,
	});

	return data;
};

export default sendResetPassword;
