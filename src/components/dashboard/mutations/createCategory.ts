import { BodyKeyValue } from "@/components/common-layout/form/types/index.types";
import { DASHBOARD } from "@/enums/dashboard.enum";
import HandleApiRequests from "@/helpers/handleApiRequests";
import { IApiResponse } from "@/types/handleSendResponse.types";
import Cookies from "js-cookie";

const createCategoryMutation = async (formValues: BodyKeyValue) => {
	const accessToken = Cookies.get("accessToken");

	const res: IApiResponse<any> = await HandleApiRequests.handleApiRequest({
		method: "POST",
		body: formValues,
		endpoint: DASHBOARD.CREATE_CATEGORY,
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	});

	return res;
};

export default createCategoryMutation;
