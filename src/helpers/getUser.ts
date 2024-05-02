import { BASE_API_URL } from "@/configs/index.config";
import AUTH from "@/enums/auth.enum";
import { UserType } from "@/types/index.types";

const getUser = async (
	accessToken: string | undefined
): Promise<UserType | null> => {
	if (!accessToken) return null;

	const response = await fetch(`${BASE_API_URL}/${AUTH.WHOAMI}`, {
		method: "GET",
		headers: {
			auth: accessToken,
		},
	});

	if (!response.ok) {
		return null;
	}

	const { data } = await response.json();
	return data.user;
};

export default getUser;
