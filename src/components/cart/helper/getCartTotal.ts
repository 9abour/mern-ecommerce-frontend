import { ICartProduct } from "@/rtk/slices/cart/cartSlice";

export const getCartTotal = (products: ICartProduct[]) => {
	let total = 0;
	let subtotal = 0;

	for (let product of products) {
		subtotal += (product.discount / 100) * product.price * product.count;
		total += product.price;
	}

	return {
		discount: subtotal,
		total: total - subtotal,
		count: products.length,
	};
};
