export type IErrorMessage = string;

export type IApiResponse<Data> = {
	data: Data | null;
	errors: IErrorMessage[] | null;
	code: number;
	statusText: string;
};
