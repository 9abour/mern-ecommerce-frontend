"use client";

import AUTH from "@/enums/auth.enum";
import HandleApiRequests from "@/helpers/handleApiRequests";
import { UserType } from "@/types/index.types";
import Cookies from "js-cookie";
import { useEffect } from "react";

const useRefreshToken = (user: UserType | null) => {
	const accessToken = Cookies.get("accessToken");

	useEffect(() => {
		const handleRefreshToken = async (refreshToken: string) => {
			const headers = {
				authorization: `Bearer ${refreshToken}`,
			};

			try {
				const { data } = await HandleApiRequests.handleApiRequest({
					method: "GET",
					endpoint: AUTH.REFRESH_TOKEN,
					headers,
				});

				const { accessToken }: any = data;

				Cookies.set("accessToken", accessToken);
			} catch (error) {
				Cookies.remove("accessToken");
				Cookies.remove("refreshToken");
			}
		};

		if (!user || !accessToken) {
			const refreshToken = Cookies.get("refreshToken");

			if (refreshToken) {
				handleRefreshToken(refreshToken);
			}
		}
	}, [user, accessToken]);
};

export default useRefreshToken;
