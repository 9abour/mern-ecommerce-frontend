import { ReactElement } from "react";

export interface IButtonText {
	text: string;
	textColor?: string;
	bgColor?: string;
	customStyles?: string;
}

export interface IButtonIcon {
	text?: string;
	icon: ReactElement;
	bgColor?: string;
	customStyles?: string;
}
