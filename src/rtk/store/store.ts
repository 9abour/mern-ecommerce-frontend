import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slices/cart/cartSlice";
import wishlistSlice from "../slices/wishlist/wishlistSlice";
import basketSlice from "../slices/basket/basketSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import selectProductCategoriesSlice from "@/rtk/slices/dashboard/selectProductCategoriesSlice";

export const store = configureStore({
	reducer: {
		cartSlice,
		wishlistSlice,
		basketSlice,
		selectProductCategoriesSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
