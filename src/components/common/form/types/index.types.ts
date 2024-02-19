import { IFormInput } from "../../input/types";

export type IHandleFormSubmit = {
	text: string;
	submitFunc: () => void;
};

export type IFormLinks = {
	text?: string;
	link: {
		text: string;
		href: string;
	};
};
export type IForm = {
	title: string;
	inputs: IFormInput[];
	handleSubmit: IHandleFormSubmit;
	links: IFormLinks[];
	onFormValueChange: ({ value, key }: Record<string, string>) => void;
};
