import { ICartProduct } from "@/rtk/slices/cart/cartSlice";

export const getCartTotal = (
	products: ICartProduct[]
): { discount: number; total: number; count: number } => {
	let total = 0;
	let subtotal = 0;

	for (let product of products) {
		subtotal += (product.discount / 100) * product.price * product.count;
		total += product.price * product.count;
	}

	return {
		discount: parseInt(subtotal.toFixed(2)),
		total: total - subtotal,
		count: products.length,
	};
};
