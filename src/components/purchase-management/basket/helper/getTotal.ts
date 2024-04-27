import { UserProductType } from "@/components/product/products/index.types";

export const getTotal = (products: UserProductType[]): number => {
	return products.reduce((total, product) => total + product.price, 0);
};
