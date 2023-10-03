import React from "react";
import { IIconButton } from "./types";

const IconButton = ({
	text,
	icon,
	customStyles,
	bgColor = "bg-primary",
	onclick,
}: IIconButton) => {
	return (
		<button
			className={`w-[40px] min-w-[40px] h-[40px] min-h-[40px] flex justify-center items-center rounded-full ${bgColor} ${
				customStyles ? customStyles : ""
			} ${bgColor === "bg-primary" && "hover:bg-primaryDark transition"}`}
			onClick={onclick}
		>
			{text}
			{icon}
		</button>
	);
};

export default IconButton;
