"use client";

import React from "react";
import IconButton from "@/components/common/button/IconButton";
import { GiShoppingBag } from "react-icons/gi";
import { useRouter } from "next/navigation";

const ButtonCart = ({ customStyles }: { customStyles?: string }) => {
	const router = useRouter();

	return (
		<IconButton
			icon={<GiShoppingBag size={20} />}
			customStyles={`text-white bg-gradient-to-b from-primary to-primaryDark ${customStyles}`}
			onclick={() => router.push("/cart")}
		/>
	);
};

export default ButtonCart;
