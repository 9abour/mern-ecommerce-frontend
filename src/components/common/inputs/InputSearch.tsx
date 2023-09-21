"use client";

import React from "react";
import ButtonIcon from "../buttons/ButtonIcon";
import { IInputSearch } from "./types";
import { IoSearchSharp } from "react-icons/io5";
import useInput from "@/hooks/useInput";

const InputSearch = ({ type, placeholder, customStyles }: IInputSearch) => {
	const [searchProps, resetSearch] = useInput("");

	return (
		<div
			className={`w-full md:w-10/12 h-[50px] min-h-[50px] border shadow-cmd rounded-full p-[4px] justify-between gap-2 bg-white ${customStyles}`}
		>
			<input
				type={type}
				placeholder={placeholder}
				className="w-full h-full focus:outline-none bg-transparent px-4"
				value={searchProps.value}
				onChange={searchProps.onChange}
			/>
			<ButtonIcon
				icon={<IoSearchSharp size={25} color="white" />}
				bgColor="bg-primary"
			/>
		</div>
	);
};

export default InputSearch;
