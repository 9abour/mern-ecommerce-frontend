import { BodyKeyValue } from "@/components/common-layout/form/types/index.types";
import AUTH from "@/enums/auth.enum";
import HandleApiRequests from "@/helpers/handleApiRequests";

const resetPassword = async (
	formValues: BodyKeyValue,
	token: string | string[]
) => {
	const data = await HandleApiRequests.handleApiRequest({
		method: "PATCH",
		body: formValues,
		endpoint: `${AUTH.RESET_PASSWORD}/${token}`,
	});

	return data;
};

export default resetPassword;
