import { IProduct } from "@/components/products/types";

export const getTotal = (products: IProduct[]): number => {
	return products.reduce((total, product) => total + product.price, 0);
};
