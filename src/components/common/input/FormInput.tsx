"use client";

import React, { useEffect } from "react";
import { IFormInput } from "./types";
import useInput from "@/components/common-layout/form/hooks/useInput";

const FormInput = ({
	type,
	placeholder,
	customStyles,
	required,
	name,
	autoFocus,
	handleChangeValue,
	validationError,
}: IFormInput) => {
	const { value, changeValue } = useInput("");

	useEffect(() => {
		if (handleChangeValue) {
			handleChangeValue({ value: value, key: name });
		}
	}, [value]);

	return (
		<div>
			<input
				type={type}
				placeholder={placeholder}
				className={`w-full h-[50px] min-h-[50px] border shadow-cmd rounded-full px-4 justify-between gap-2 text-xl bg-white outline-none focus:border-primary ${
					validationError ? "!border-red-600" : ""
				} ${customStyles}`}
				value={value}
				onChange={changeValue}
				required={required}
				name={name}
				autoFocus={autoFocus}
			/>
			{validationError ? (
				<p className="text-red-600 ml-4">{validationError.message}</p>
			) : null}
		</div>
	);
};

export default FormInput;
