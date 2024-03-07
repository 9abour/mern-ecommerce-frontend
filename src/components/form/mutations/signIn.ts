import { BodyKeyValue } from "@/components/form/types/index.types";
import AUTH from "@/enums/auth.enum";
import HandleApiRequests from "@/helpers/handleApiRequests";
import writeCookie from "@/helpers/writeCookie";

const signInMutation = async (formValues: BodyKeyValue) => {
	const data: any = await HandleApiRequests.handleApiRequest({
		method: "POST",
		body: formValues,
		endpoint: AUTH.LOGIN,
	});

	const { accessToken, refreshToken } = data.data;

	writeCookie({ operator: "set", key: "accessToken", value: accessToken });

	writeCookie({ operator: "set", key: "refreshToken", value: refreshToken });

	return data;
};

export default signInMutation;
