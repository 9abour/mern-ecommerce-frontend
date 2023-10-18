import axios, { AxiosError } from "axios";

export const getUser = async () => {
	const pathname = window.location.pathname;

	try {
		const { data } = await axios.get("/api/auth/user");

		return {
			user: data,
			error: null,
		};
	} catch (e) {
		const error = e as AxiosError;

		return {
			error,
			user: null,
		};
	}
};
