"use client";

import React from "react";
import { IInput } from "./types";

const Input = ({
	type,
	placeholder,
	customStyles,
	required,
	autoFocus,
	validationError,
	value,
	changeValue,
}: IInput) => {
	return (
		<div>
			<input
				type={type}
				placeholder={placeholder}
				className={`w-full h-[50px] min-h-[50px] border shadow-cmd rounded-full px-4 justify-between gap-2 text-xl bg-white outline-none focus:border-primary ${
					validationError ? "!border-red-400" : ""
				} ${customStyles}`}
				value={value}
				onChange={changeValue}
				required={required}
				autoFocus={autoFocus}
			/>
			{validationError ? (
				<p className="text-red-400 ml-4">{validationError.message}</p>
			) : null}
		</div>
	);
};

export default Input;
