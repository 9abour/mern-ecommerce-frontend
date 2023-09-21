import React from "react";
import ButtonIcon from "@/components/common/buttons/ButtonIcon";
import { GiShoppingBag } from "react-icons/gi";

const ButtonCart = () => {
	return (
		<ButtonIcon
			icon={<GiShoppingBag size={20} />}
			customStyles="text-white bg-gradient-to-t from-primary to-primaryLight"
		/>
	);
};

export default ButtonCart;
