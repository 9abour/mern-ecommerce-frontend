import { ITarget } from "@/hooks/types/index.types";
import { ZodIssue } from "zod";

export interface IInput {
	type: string;
	value: string;
	changeValue: (e: ITarget) => void;
	placeholder?: string;
	required?: boolean;
	autoFocus?: boolean;
	min?: number;
	validationError?: ZodIssue | null;
	customStyles?: string;
	containerStyles?: string;
}

export interface IInputSearch {
	type: string;
	placeholder?: string;
	customStyles?: string;
}

export interface IInputProductSearch extends IInputSearch {
	label?: string;
}

export interface IFormInput extends IInputSearch {
	name: string;
	required?: boolean;
	autoFocus?: boolean;
	handleChangeValue?: ({ value, key }: Record<string, string>) => void;
	validationError?: ZodIssue | null;
	min?: number;
	containerStyles?: string;
	value?: string;
}

export interface ISubmitSearchHookProps {
	searchProps: string;
	setFormIsActive: (isActive: boolean) => void;
	reset: () => void;
}
