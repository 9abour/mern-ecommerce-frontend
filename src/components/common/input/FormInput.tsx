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
	containerStyles,
}: IFormInput) => {
	const { value, changeValue } = useInput("");

	useEffect(() => {
		if (handleChangeValue) {
			handleChangeValue({ value: value, key: name });
		}
	}, [value]);

	return (
		<div className={containerStyles}>
			{type === "textarea" ? (
				<textarea
					value={value}
					onChange={changeValue}
					name={name}
					autoFocus={autoFocus}
					className={`${customStyles} ${
						validationError ? "!border-red-400" : ""
					}`}
					placeholder={placeholder}
				/>
			) : (
				<input
					type={type}
					className={`w-full h-[50px] min-h-[50px] border shadow-cmd rounded-full px-4 justify-between gap-2 text-xl bg-white outline-none focus:border-primary ${
						validationError ? "!border-red-400" : ""
					} ${customStyles}`}
					value={value}
					onChange={changeValue}
					name={name}
					autoFocus={autoFocus}
					placeholder={placeholder}
				/>
			)}

			{validationError ? (
				<p className="text-red-400 ml-4 mb-2">{validationError.message}</p>
			) : null}
		</div>
	);
};

export default FormInput;
