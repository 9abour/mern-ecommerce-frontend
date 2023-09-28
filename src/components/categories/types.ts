import { StaticImageData } from "next/image";

export interface ICategory {
	name: string;
	color: string;
	image: string;
	info?: string;
}

export interface IPopularCategoryCard {
	name: string;
	image: string | StaticImageData;
	bg: string;
	customStyles?: string;
	fullHeight?: boolean;
}
