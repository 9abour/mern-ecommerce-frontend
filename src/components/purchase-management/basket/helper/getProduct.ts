import { UserProductType } from "@/components/product/products/index.types";

export const productInBasket = (
	id: string,
	products: UserProductType[]
): boolean => {
	return products.find(product => product.id === id) ? true : false;
};
