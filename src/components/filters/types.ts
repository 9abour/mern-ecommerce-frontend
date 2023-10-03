import { ReactNode } from "react";

export interface IFilterOption {
	id: number;
	content: ReactNode[] | string;
	isSelected: boolean;
}
