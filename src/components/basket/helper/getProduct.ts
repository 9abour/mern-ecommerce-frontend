import { IProduct } from "@/components/products/types";

export const productInBasket = (id: string, products: IProduct[]): boolean => {
	return products.find(product => product.id === id) ? true : false;
};
