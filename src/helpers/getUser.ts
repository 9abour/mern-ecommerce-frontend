import axios, { AxiosError } from "axios";

export const getUser = async () => {
	try {
		const { data } = await axios.get("/api/auth/user");

		console.log(data);

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
