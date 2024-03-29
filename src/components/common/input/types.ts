import { ZodIssue } from "zod";

export interface IInput {
	type: string;
	value: string;
	placeholder?: string;
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
}

export interface ISubmitSearchHookProps {
	searchProps: string;
	setFormIsActive: (isActive: boolean) => void;
	resetSearch: () => void;
}
