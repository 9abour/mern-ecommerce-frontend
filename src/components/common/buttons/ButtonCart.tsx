import React from "react";
import ButtonIcon from "@/components/common/buttons/ButtonIcon";
import { GiShoppingBag } from "react-icons/gi";

const ButtonCart = () => {
	return (
		<ButtonIcon
			icon={<GiShoppingBag size={20} />}
			customStyles="text-white bg-primary"
		/>
	);
};

export default ButtonCart;
