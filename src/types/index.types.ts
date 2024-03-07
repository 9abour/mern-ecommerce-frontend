import { ReactNode } from "react";

export type IChildren = {
	children: ReactNode;
};

export type UserType = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	image_url: string;
	wishlist: [];
	cart: [];
	role: string;
	iat: number;
	exp: number;
};
