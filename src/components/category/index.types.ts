import { StaticImageData } from "next/image";

export interface ICategory {
	name: string;
	color: string;
	imageUrl: string;
	info?: string;
}

export interface IPopularCategoryCard {
	name: string;
	slug: string;
	image: string | StaticImageData;
	bg: string;
	customStyles?: string;
	fullHeight?: boolean;
}
