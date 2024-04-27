import axios from "axios";
import { IHandleApiRequestArgs } from "./types/handleApiReuests.types";
import { BASE_API_URL } from "@/configs/index.config";
import { IApiResponse } from "@/types/handleSendResponse.types";

class HandleApiRequests {
	public static handleApiRequest = async <Data>({
		method,
		headers,
		body,
		endpoint,
	}: IHandleApiRequestArgs<Data>): Promise<IApiResponse<Data>> => {
		const { data } = await axios({
			method,
			url: `${BASE_API_URL}/${endpoint}`,
			data: body,
			headers,
		});

		return data;
	};
	public static handlePublicApiRequest = async <Data>({
		method,
		headers,
		body,
		url,
	}: IHandleApiRequestArgs<Data>): Promise<IApiResponse<Data>> => {
		const { data } = await axios({
			method,
			url,
			data: body,
			headers,
		});

		return data;
	};
}

export default HandleApiRequests;
