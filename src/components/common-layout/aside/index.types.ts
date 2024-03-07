import { ReactNode } from "react";

export interface IListItem {
	text: string;
	href: string;
	icon: ReactNode;
	isActive: number;
}
