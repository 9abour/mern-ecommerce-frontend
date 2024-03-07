"use client";

import React from "react";
import { IInputProductSearch } from "./types";
import useInput from "@/components/common-layout/form/hooks/useInput";

const InputProductSearch = ({
	type,
	placeholder,
	customStyles,
	label,
}: IInputProductSearch) => {
	const [searchProps] = useInput("");

	return (
		<>
			<label htmlFor="productSearch" className="block mb-1">
				{label}
			</label>

			<input
				id="productSearch"
				type={type}
				placeholder={placeholder}
				className={`w-full md:w-10/12 h-[50px] min-h-[50px] border shadow-cmd rounded-full px-4 justify-between gap-2 bg-white outline-none ${customStyles}`}
				value={searchProps.value}
				onChange={searchProps.onChange}
			/>
		</>
	);
};

export default InputProductSearch;
