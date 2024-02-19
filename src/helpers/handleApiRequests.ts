import axios from "axios";
import { IHandleApiRequestArgs } from "./types/handleApiReuests.types";
import { BASE_API_URL } from "@/configs/index.config";

class HandleApiRequests {
	// Handle request with axios
	public static handleApiRequest = async <Data>({method, headers, body, endpoint}: IHandleApiRequestArgs<Data>) => {
    const {data} = await axios({method: method, url: `${BASE_API_URL}/${endpoint}`, headers, data: body});
  };

	// Handle request without axios
	public static handleBasicApiRequest = () => {};
}

export default HandleApiRequests;