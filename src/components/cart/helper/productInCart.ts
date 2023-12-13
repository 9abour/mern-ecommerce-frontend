import { IProduct } from "@/components/products/index.types";

export const productInCart = (id: string, products: IProduct[]): boolean => {
	return products.some(product => product.id === id) ? true : false;
};
