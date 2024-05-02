import { ReactNode } from "react";

export type TooltipPropsType = {
	children: ReactNode;
	direction: "top" | "left" | "bottom" | "right";
	customStyles?: string;
};

export type DialogPropsType = {
	title: string;
	message: string;
	conformText?: string;
	icon?: ReactNode;
	type?: "delete" | "warning";
};
