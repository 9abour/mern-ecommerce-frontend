"use client";

import AUTH from "@/enums/auth.enum";
import HandleApiRequests from "@/helpers/handleApiRequests";
import Cookies from "js-cookie";

const useAuthToken = () => {
	const refreshToken = Cookies.get("refreshToken");

	const handleAuthTokenRefresh = async () => {
		const headers = {
			authorization: `Bearer ${refreshToken}`,
		};

		try {
			const { data } = await HandleApiRequests.handleApiRequest({
				method: "POST",
				endpoint: AUTH.REFRESH_TOKEN,
				headers,
			});

			const { accessToken }: any = data;

			Cookies.set("accessToken", accessToken);
			return accessToken;
		} catch (error) {
			Cookies.remove("accessToken");
			Cookies.remove("refreshToken");
		}
	};

	return {
		handleAuthTokenRefresh,
	};
};

export default useAuthToken;
