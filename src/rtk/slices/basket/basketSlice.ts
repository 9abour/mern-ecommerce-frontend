import { UserProductType } from "@/components/product/products/index.types";
import { createSlice } from "@reduxjs/toolkit";

export interface IBasketState {
	products: UserProductType[];
}
const initialState: IBasketState = {
	products: [],
};

const basketSlice = createSlice({
	initialState,
	name: "basket",
	reducers: {
		addToBasket: (state, action) => {
			if (
				state.products.find(product => product.id !== action.payload.id) ||
				state.products.length <= 0
			) {
				state.products.push(action.payload);
			}
		},
		removeFromBasket: (state, action) => {
			return {
				products: state.products.filter(
					product => product.id !== action.payload
				),
			};
		},

		clearBasket: state => {
			state.products = [];
		},
	},
});

export default basketSlice.reducer;
export const { addToBasket, removeFromBasket, clearBasket } =
	basketSlice.actions;
