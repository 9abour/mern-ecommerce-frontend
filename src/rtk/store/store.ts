import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slices/cart/cartSlice";
import wishlistSlice from "../slices/wishlist/wishlistSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
	reducer: {
		cartSlice,
		wishlistSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
