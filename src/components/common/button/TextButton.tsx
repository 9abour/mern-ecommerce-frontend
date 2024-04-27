import React from "react";
import { ITextButton } from "./types";

const TextButton = ({ text, customStyles, onclick, type }: ITextButton) => {
	const handleClick = () => {
		if (onclick) {
			onclick();
		}
	};

	return (
		<button
			type={type}
			className={`px-4 py-2 rounded-full transition-all ${
				customStyles ? customStyles : ""
			}`}
			onClick={handleClick}
		>
			{text}
		</button>
	);
};

export default TextButton;
