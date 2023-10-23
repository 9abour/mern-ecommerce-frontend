import React from "react";
import { ITextButton } from "./types";

const TextButton = ({ text, customStyles, onclick }: ITextButton) => {
	return (
		<button
			className={`px-4 py-2 rounded-full transition-all ${
				customStyles ? customStyles : ""
			}`}
			onClick={onclick}
		>
			{text}
		</button>
	);
};

export default TextButton;
