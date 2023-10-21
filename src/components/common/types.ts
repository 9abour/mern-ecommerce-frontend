import { IFilterOptions } from "../filters/types";

export interface ILineBottom {
	customStyles?: string;
}

export interface ISelect {
	label: string;
	options: IFilterOptions[];
	setOptions: (options: IFilterOptions[]) => void;
}
