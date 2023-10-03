import React from "react";
import IconButton from "@/components/common/buttons/IconButton";
import { GiShoppingBag } from "react-icons/gi";

const ButtonCart = ({ customStyles }: { customStyles?: string }) => {
	return (
		<IconButton
			icon={<GiShoppingBag size={20} />}
			customStyles={`text-white bg-gradient-to-b from-primary to-primaryDark ${customStyles}`}
		/>
	);
};

export default ButtonCart;
