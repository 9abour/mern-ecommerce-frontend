import React from "react";
import { IButtonText } from "./types";

const ButtonText = ({
	text,
	textColor = "white",
	bgColor = "bg-darkSecondary",
	customStyles,
}: IButtonText) => {
	return (
		<button
			className={`px-4 py-2 rounded-full bg-darkSecondary text-${textColor} ${
				customStyles ? customStyles : ""
			} ${bgColor}`}
		>
			{text}
		</button>
	);
};

export default ButtonText;
