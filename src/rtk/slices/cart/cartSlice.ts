import { IProduct } from "@/components/products/types";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

export interface ICartProduct extends IProduct {
	count: number;
}

export interface ICartState {
	products: ICartProduct[];
}

const initialState: ICartState = {
	products: [
		{
			id: "1",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			rate: 4,
			weight: "250g",
			categories: ["Food", "Burgers"],
			count: 1,
			freeDelivery: true,
		},
	],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			// Check if the product is already in the cart
			let isDuplicated = false;
			state.products.map(product => {
				if (product.id === action.payload.id) {
					isDuplicated = true;
				}
			});

			if (!isDuplicated) {
				// Add the product to the cart
				const newCartProduct = {
					...action.payload,
					inCart: true,
					count: 1,
				};
				state.products.push(newCartProduct);
				toast.success(`"${newCartProduct.name}" added to cart successfully`);
			}
		},
		removeFromCart: (state, action) => {
			const updated = state.products.filter(
				product => product.id !== action.payload.id
			);

			state.products = updated;
			toast.success(`"${action.payload.name}" removed from cart successfully`);
		},
		clearCart: state => {
			state.products = [];
			toast.success(`Cart cleared successfully`);
		},
		increaseProductCount: (state, action) => {},
		decreaseProductCount: (state, action) => {},
	},
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
