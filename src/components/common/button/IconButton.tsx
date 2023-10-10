import React from "react";
import { IIconButton } from "./types";

const IconButton = ({ icon, customStyles, onclick, disabled }: IIconButton) => {
	return (
		<button
			className={`w-[40px] h-[40px] flex justify-center items-center rounded-full ${
				customStyles ? customStyles : ""
			}`}
			onClick={onclick}
			disabled={disabled}
		>
			{icon}
		</button>
	);
};

export default IconButton;
