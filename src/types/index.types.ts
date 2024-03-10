import { ReactNode } from "react";

export type ChildrenType = {
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
