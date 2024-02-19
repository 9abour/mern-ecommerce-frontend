"use client";

import React from "react";
import IconButton from "@/components/common/button/IconButton";
import { GiShoppingBag } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/rtk/store/store";

const ButtonCart = ({ customStyles }: { customStyles?: string }) => {
	const router = useRouter();

	const { products } = useAppSelector(state => state.cartSlice);

	return (
		<div className="relative">
			<IconButton
				icon={<GiShoppingBag size={20} />}
				customStyles={`text-white bg-gradient-to-b from-primary to-primaryDark ${customStyles}`}
				onclick={() => router.push("/cart")}
			/>
			<span className="absolute w-[50%] h-[50%] -top-[6px] -right-[6px] rounded-full text-xs font-bold bg-dark text-white text-center flex justify-center items-center">
				{products.length}
			</span>
		</div>
	);
};

export default ButtonCart;
