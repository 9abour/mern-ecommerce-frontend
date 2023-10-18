import axios, { AxiosError } from "axios";

export const getUser = async () => {
	const pathname = window.location.pathname;

	try {
		const { data } = await axios.get("/api/auth/user");

		if (data && (pathname.includes("signin") || pathname.includes("signup"))) {
			location.pathname = "/";
		}

		return {
			user: data,
			error: null,
		};
	} catch (e) {
		const error = e as AxiosError;

		if (!pathname.includes("signin") && !pathname.includes("signup")) {
			location.pathname = "/signin";
		}

		return {
			error,
			user: null,
		};
	}
};
