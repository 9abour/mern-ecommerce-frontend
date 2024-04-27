import { FormEvent, ReactNode } from "react";
import { IFormInput } from "../../input/types";
import { ColorResult } from "react-color";
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
	isLoading?: boolean;
	children?: ReactNode;
};

export type CustomColorPickerProps = {
	color: string;
	hideColorInput: () => void;
	isColorInputOpen: boolean;
	changeColor: (color: ColorResult) => void;
};
