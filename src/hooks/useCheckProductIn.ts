import { IProduct } from "@/components/product/products/index.types";

const useCheckProductIn = (id: string, products: IProduct[]): boolean => {
	return products.some(product => product.id === id) ? true : false;
};

export default useCheckProductIn;
