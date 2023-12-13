"use client";

import React from "react";
import IconButton from "@/components/common/button/IconButton";
import { TbShoppingBagCheck, TbShoppingBagPlus } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "@/rtk/store/store";
import { addToCart, removeFromCart } from "@/rtk/slices/cart/cartSlice";
import { IProduct } from "@/components/products/types";
import { usePathname, useRouter } from "next/navigation";
import { useCheckProductIn } from "@/hooks/useCheckProductIn";
import { productInBasket } from "@/components/basket/helper/index";

const AddToCartButton = ({
	customStyles,
	product,
}: {
	customStyles?: string;
	product: IProduct;
}) => {
	const dispatch = useAppDispatch();
	const { products } = useAppSelector(state => state.cartSlice);
	const basketProducts = useAppSelector(state => state.basketSlice.products);

	const inCart = useCheckProductIn(product.id, products);
	const inBasket = productInBasket(product.id, basketProducts);

	const pathname = usePathname().split("/");
	const router = useRouter();

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
				pathname[pathname.length - 1] !== "wishlist" || !inCart
					? dispatch(inCart ? removeFromCart(product) : addToCart(product))
					: router.push("./cart");
			}}
		/>
	);
};

export default AddToCartButton;
