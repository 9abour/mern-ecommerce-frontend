import React from "react";
import { IButtonText } from "./types";

const ButtonText = ({ text, customStyles, onclick }: IButtonText) => {
	return (
		<button
			className={`px-4 py-2 rounded-full ${customStyles ? customStyles : ""}`}
			onClick={onclick}
		>
			{text}
		</button>
	);
};

export default ButtonText;
