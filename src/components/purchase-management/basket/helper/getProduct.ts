import { IProduct } from "@/components/product/products/index.types";

export const productInBasket = (id: string, products: IProduct[]): boolean => {
	return products.find(product => product.id === id) ? true : false;
};
