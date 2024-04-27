import { UserProductType } from "@/components/product/products/index.types";

export const productInCart = (
	id: string,
	products: UserProductType[]
): boolean => {
	return products.some(product => product.id === id) ? true : false;
};
