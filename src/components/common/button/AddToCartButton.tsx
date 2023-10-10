"use client";

import React from "react";
import IconButton from "@/components/common/button/IconButton";
import { TbShoppingBagCheck, TbShoppingBagPlus } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "@/rtk/store/store";
import { addToCart, removeFromCart } from "@/rtk/slices/cart/cartSlice";
import { IProduct } from "@/components/products/types";
import { productInCart } from "@/components/cart/helper/productInCart";

const AddToCartButton = ({
	customStyles,
	product,
}: {
	customStyles?: string;
	product: IProduct;
}) => {
	const dispatch = useAppDispatch();
	const { products } = useAppSelector(state => state.cartSlice);
	const inCart = productInCart(product.id, products);

	return (
		<IconButton
			icon={
				inCart ? (
					<TbShoppingBagCheck size={25} />
				) : (
					<TbShoppingBagPlus size={25} />
				)
			}
			customStyles={`text-white bg-gradient-to-b from-primary to-primaryDark ${customStyles}`}
			onclick={() => {
				dispatch(inCart ? removeFromCart(product) : addToCart(product));
			}}
		/>
	);
};

export default AddToCartButton;
