import { IFilterOptions } from "../filters/index.types";

export interface ILineBottom {
	customStyles?: string;
}

export interface ISelect {
	label: string;
	options: IFilterOptions[];
	setOptions: (options: IFilterOptions[]) => void;
}
