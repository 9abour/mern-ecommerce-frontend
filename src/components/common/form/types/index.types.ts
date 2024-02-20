import { FormEvent } from "react";
import { IFormInput } from "../../input/types";
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
	submitText: string;
	submitFunc: (e: FormEvent) => void;
	links?: IFormLinks[];
	onFormValueChange?: ({ value, key }: Record<string, string>) => void;
	validationErrors?: any;
};
