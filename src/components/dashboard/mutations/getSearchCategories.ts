import { DASHBOARD } from "@/enums/dashboard.enum";
import HandleApiRequests from "@/helpers/handleApiRequests";
import { IApiResponse } from "@/types/handleSendResponse.types";

const getSearchCategoriesMutation = async (searchValue: string) => {
	const res: IApiResponse<any> = await HandleApiRequests.handleApiRequest({
		method: "GET",
		endpoint: `${DASHBOARD.SEARCH_CATEGORIES}?p=${searchValue}`,
	});

	return res;
};

export { getSearchCategoriesMutation };
