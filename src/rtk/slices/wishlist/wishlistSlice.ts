import { UserProductType } from "@/components/product/products/index.types";
import { createSlice } from "@reduxjs/toolkit";

export interface IWishlistProduct extends UserProductType {
	history: string;
}

export interface IWishlistState {
	products: IWishlistProduct[];
}

const initialState: IWishlistState = {
	products: [],
};

const wishlistSlice = createSlice({
	name: "wishlist",
	initialState,
	reducers: {
		addToWishlist: (state, action) => {
			// Check if the product is already in the wishlist
			let isDuplicated = false;
			state.products.map(product => {
				if (product.id === action.payload.id) {
					isDuplicated = true;
				}
			});

			if (!isDuplicated) {
				// Add the product to the wishlist
				const newWishlistProduct = {
					...action.payload,
					history: new Date().toString().split(" ").slice(0, 3).join(" "),
				};
				state.products.push(newWishlistProduct);
			}
		},
		removeFromWishlist: (state, action) => {
			const updated = state.products.filter(
				product => product.id !== action.payload.id
			);

			state.products = updated;
		},
		clearWishlist: state => {
			state.products = [];
		},
	},
});

export default wishlistSlice.reducer;
export const { addToWishlist, removeFromWishlist, clearWishlist } =
	wishlistSlice.actions;
