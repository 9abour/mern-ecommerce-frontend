import { ReactElement } from "react";

export interface ITextButton {
	text: string;
	textColor?: string;
	customStyles?: string;
	onclick?: () => void;
}

export interface IIconButton {
	icon: ReactElement;
	bgColor?: string;
	customStyles?: string;
	onclick?: () => void;
}

export interface IMenuButton {
	isMenuOpen: boolean;
	setIsMenuOpen: (isOpen: boolean) => void;
	customStyles?: string;
}
