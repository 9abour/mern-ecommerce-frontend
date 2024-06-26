import { UserProductType } from "@/components/product/products/index.types";
import { createSlice } from "@reduxjs/toolkit";

export interface ICartProduct extends UserProductType {
	count: number;
}

export interface ICartState {
	products: ICartProduct[];
}

const initialState: ICartState = {
	products: [],
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
				};
				state.products.push(newCartProduct);
			}
		},
		removeFromCart: (state, action) => {
			const updated = state.products.filter(
				product => product.id !== action.payload.id
			);

			state.products = updated;
		},
		clearCart: state => {
			state.products = [];
		},
		increaseProductCount: (state, action) => {
			state.products.map(product => {
				if (product.id === action.payload) {
					return {
						...product,
						count: product.count++,
					};
				} else {
					return {
						...product,
					};
				}
			});
		},
		decreaseProductCount: (state, action) => {
			state.products.map(product => {
				if (product.id === action.payload && product.count > 1) {
					return {
						...product,
						count: product.count--,
					};
				} else {
					return {
						...product,
					};
				}
			});
		},
		updateProductCount: (state, action) => {
			const { id, count } = action.payload;

			const updated = state.products.map(product => {
				if (product.id === id) {
					return {
						...product,
						count,
					};
				} else {
					return {
						...product,
					};
				}
			});

			state.products = updated;
		},
	},
});

export default cartSlice.reducer;
export const {
	addToCart,
	removeFromCart,
	clearCart,
	increaseProductCount,
	decreaseProductCount,
	updateProductCount,
} = cartSlice.actions;
