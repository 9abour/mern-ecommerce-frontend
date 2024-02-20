"use client";

import React, { useEffect } from "react";
import { IFormInput } from "./types";
import useInput from "@/hooks/useInput";

const FormInput = ({
	type,
	placeholder,
	customStyles,
	required,
	name,
	autoFocus,
	handleChangeValue,
	validationError
}: IFormInput) => {
	const [searchProps] = useInput("");
	const { value, onChange } = searchProps;

	useEffect(() => {
		if (handleChangeValue) {
			handleChangeValue({ value: searchProps.value, key: name });
		}
	}, [searchProps.value]);

	return (
		<div>
			<input
				type={type}
				placeholder={placeholder}
				className={`w-full h-[50px] min-h-[50px] border shadow-cmd rounded-full px-4 justify-between gap-2 text-xl bg-white outline-none focus:border-primary ${customStyles}`}
				value={value}
				onChange={onChange}
				required={required}
				name={name}
				autoFocus={autoFocus}
			/>
			{validationError ? <p className="text-red-600 ml-4">{validationError.message}</p> : null}
		</div>
	);
};

export default FormInput;
