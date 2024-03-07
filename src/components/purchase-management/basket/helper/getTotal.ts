import { IProduct } from "@/components/product/products/index.types";

export const getTotal = (products: IProduct[]): number => {
	return products.reduce((total, product) => total + product.price, 0);
};
