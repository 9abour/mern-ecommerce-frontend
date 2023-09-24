import React from "react";
import ButtonIcon from "@/components/common/buttons/ButtonIcon";
import { GiShoppingBag } from "react-icons/gi";

const ButtonCart = ({ customStyles }: { customStyles?: string }) => {
	return (
		<ButtonIcon
			icon={<GiShoppingBag size={20} />}
			customStyles={`text-white bg-gradient-to-b from-primary to-primaryDark ${customStyles}`}
		/>
	);
};

export default ButtonCart;
