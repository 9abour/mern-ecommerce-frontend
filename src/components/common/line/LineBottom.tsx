import React from "react";
import { ILineBottom } from "../index.types";

const LineBottom = ({ customStyles }: ILineBottom) => {
	return (
		<div
			className={`h-8 grid items-center ${customStyles ? customStyles : ""}`}
		>
			<div className="h-[1px] mx-2 bg-gray-500 rounded-full" />
		</div>
	);
};

export default LineBottom;
