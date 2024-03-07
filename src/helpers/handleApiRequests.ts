import axios from "axios";
import { IHandleApiRequestArgs } from "./types/handleApiReuests.types";
import { BASE_API_URL } from "@/configs/index.config";
import { IApiResponse } from "@/types/handleSendResponse.types";

class HandleApiRequests {
	// Handle request with axios
	public static handleApiRequest = async <Data>({
		method,
		headers,
		body,
		endpoint,
	}: IHandleApiRequestArgs<Data>): Promise<IApiResponse<Data> | unknown> => {
		const { data } = await axios({
			method,
			url: `${BASE_API_URL}/${endpoint}`,
			data: body,
			headers,
		});

		return data;
	};

	// Handle request without axios
	public static handleBasicApiRequest = () => {};
}

export default HandleApiRequests;
