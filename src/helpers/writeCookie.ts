import { writeCookieArgs } from "@/helpers/types/index.types";
import Cookies from "js-cookie";

const writeCookie = ({ operator, key, value }: writeCookieArgs) => {
	if (operator == "remove") {
		Cookies.remove(key);
		return;
	}

	Cookies.set(key, value);
};

export default writeCookie;
