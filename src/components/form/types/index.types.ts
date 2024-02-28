import { AxiosError } from "axios";
export interface IUserResponse {
	user: string | null;
	error: AxiosError | null;
}

export type SignUpMutationArgs = Record<string, string>;
