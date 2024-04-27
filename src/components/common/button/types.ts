import { ReactElement } from "react";

export interface ITextButton {
	text: string;
	textColor?: string;
	customStyles?: string;
	type?: "button" | "submit" | undefined;
	onclick?: Function;
}

export interface IIconButton {
	icon: ReactElement;
	bgColor?: string;
	customStyles?: string;
	disabled?: boolean;
	onclick: Function;
}

export interface IMenuButton {
	isMenuOpen: boolean;
	setIsMenuOpen: (isOpen: boolean) => void;
	customStyles?: string;
}
