export const getUser = async () => {
	try {
		const { user } = await fetch("/api/auth/user").then(data => data.json());

		console.log(user);

		return {
			user,
			error: null,
		};
	} catch (e) {
		console.log(e);
		return {
			error: e,
			user: null,
		};
	}
};
