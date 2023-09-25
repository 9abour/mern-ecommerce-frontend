import { ReactElement } from "react";

export interface IButtonText {
	text: string;
	textColor?: string;
	bgColor?: string;
	customStyles?: string;
	onclick?: () => void;
}

export interface IButtonIcon {
	text?: string;
	icon: ReactElement;
	bgColor?: string;
	customStyles?: string;
	onclick?: () => void;
}

export interface IButtonMenu {
	isMenuOpen: boolean;
	setIsMenuOpen: (isOpen: boolean) => void;
	customStyles?: string;
}
