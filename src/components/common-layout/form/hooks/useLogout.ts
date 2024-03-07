import Cookies from "js-cookie";

const useLogout = () => {
	const logout = () => {
		Cookies.remove("accessToken");
		Cookies.remove("refreshToken");

		window.location.replace("/aut/signin");
	};

	return {
		logout,
	};
};

export default useLogout;
