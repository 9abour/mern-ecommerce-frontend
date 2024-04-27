import { UserProductType } from "@/components/product/products/index.types";

const useCheckProductIn = (
	id: string,
	products: UserProductType[]
): boolean => {
	return products.some(product => product.id === id) ? true : false;
};

export default useCheckProductIn;
