import { IApiResponse } from "@/types/handleSendResponse.types";
import axios, { AxiosError } from "axios";

const handleAxiosError = (error: unknown): IApiResponse<null> => {
	if (axios.isAxiosError(error)) {
		const axiosError = error as AxiosError;

		if (axiosError.response) {
			const errorResponse = axiosError.response.data as IApiResponse<null>;
			return errorResponse;
		}
	}

	return {
		data: null,
		errors: ["An unexpected error occurred."],
		code: 500,
		statusText: "Internal Server Error",
	};
};

export default handleAxiosError;
