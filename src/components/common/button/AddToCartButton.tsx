"use client";

import React from "react";
import IconButton from "@/components/common/button/IconButton";
import { TbShoppingBagCheck, TbShoppingBagPlus } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "@/rtk/store/store";
import { addToCart, removeFromCart } from "@/rtk/slices/cart/cartSlice";
import { usePathname, useRouter } from "next/navigation";
import useCheckProductIn from "@/hooks/useCheckProductIn";
import { UserProductType } from "@/components/product/products/index.types";
import { IoBagAdd, IoBagCheck } from "react-icons/io5";

const AddToCartButton = ({
	customStyles,
	product,
}: {
	customStyles?: string;
	product: UserProductType;
}) => {
	const dispatch = useAppDispatch();
	const { products } = useAppSelector(state => state.cartSlice);

	const inCart = useCheckProductIn(product.id, products);

	const pathname = usePathname().split("/");
	const router = useRouter();

	return (
		<IconButton
			icon={inCart ? <IoBagCheck size={20} /> : <IoBagAdd size={20} />}
			customStyles={`text-dark bg-gradient-to-b from-primary to-primaryDark ${customStyles}`}
			onclick={() => {
				pathname[pathname.length - 1] !== "wishlist" || !inCart
					? dispatch(inCart ? removeFromCart(product) : addToCart(product))
					: router.push("./cart");
			}}
		/>
	);
};

export default AddToCartButton;
