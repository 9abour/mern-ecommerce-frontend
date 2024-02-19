import { AxiosHeaders } from "axios";

export type IRequestMethods = "GET" | "POST" | "PATCH" | "DELETE";

export type IHandleApiRequestArgs<Data> = {
	method: IRequestMethods;
	endpoint: string;
	body: Data;
	queryParams?: Record<string, string>;
	withCredentials?: boolean;
	headers: AxiosHeaders;
};
