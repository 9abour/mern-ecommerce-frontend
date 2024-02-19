import { ReactNode } from "react";

export interface IFilters {
	category: IFilterOptions[];
	availability: IFilterOptions[];
	rate: IFilterOptions[];
	price: [number, number];
}

export interface IFilterOptions {
	id: string;
	content: ReactNode[] | string | number;
	isSelected: boolean;
}
