import React from "react";
import { IIconButton } from "./types";

const IconButton = ({ icon, customStyles, onclick, disabled }: IIconButton) => {
	return (
		<button
			className={`w-[40px] h-[40px] flex justify-center items-center rounded-full transition-all ${
				customStyles ? customStyles : ""
			}`}
			onClick={() => onclick()}
			disabled={disabled}
			aria-label="icon"
			type="button"
		>
			{icon}
		</button>
	);
};

export default IconButton;
