"use client";

import React from "react";
import { IFormInput } from "./types";
import useInput from "@/hooks/useInput";

const FormInput = ({
	type,
	placeholder,
	customStyles,
	required,
	name,
}: IFormInput) => {
	const [searchProps, resetSearch] = useInput("");

	return (
		<input
			type={type}
			placeholder={placeholder}
			className={`w-full h-[50px] min-h-[50px] border shadow-cmd rounded-full px-4 justify-between gap-2 text-xl bg-white outline-none focus:border-primary ${customStyles}`}
			value={searchProps.value}
			onChange={searchProps.onChange}
			required={required}
			name={name}
		/>
	);
};

export default FormInput;
