import React from "react";
import { IButtonIcon } from "./types";

const ButtonIcon = ({
	text,
	icon,
	customStyles,
	bgColor = "bg-primary",
}: IButtonIcon) => {
	return (
		<button
			className={`w-[40px] min-w-[40px] h-[40px] min-h-[40px] flex justify-center items-center rounded-full ${bgColor} ${
				customStyles ? customStyles : ""
			} ${bgColor === "bg-primary" && "hover:bg-primaryDark transition"}`}
		>
			{text}
			{icon}
		</button>
	);
};

export default ButtonIcon;
