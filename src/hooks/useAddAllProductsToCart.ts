import { UserProductType } from "@/components/product/products/index.types";
import { clearBasket } from "@/rtk/slices/basket/basketSlice";
import { addToCart } from "@/rtk/slices/cart/cartSlice";
import { useAppDispatch } from "@/rtk/store/store";

/**
 * Adds all products to the cart.
 *
 * @param {Array} products - The array of products to add to the cart.
 * @return {void}
 */

export const useAddAllProductsToCart = (products: UserProductType[]) => {
	const dispatch = useAppDispatch();

	/**
	 * Adds all products to the cart.
	 *
	 * @param {Array} products - The array of products to add to the cart.
	 */
	const addAllProductsToCart = () => {
		products.map(product => {
			dispatch(addToCart(product));
		});

		dispatch(clearBasket());
	};

	return {
		addAllProductsToCart,
	};
};
