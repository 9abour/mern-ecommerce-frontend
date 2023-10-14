"use client";

import React, { useState } from "react";
import IconButton from "../button/IconButton";
import { IInputSearch } from "./types";
import { IoSearchSharp } from "react-icons/io5";
import useInput from "@/hooks/useInput";
import Link from "next/link";
import ThrobbingLoading from "../laoding/ThrobbingLoading";
import { useRouter } from "next/navigation";

const InputSearch = ({ type, placeholder, customStyles }: IInputSearch) => {
	const [searchProps, resetSearch] = useInput("");
	const [searchSuggestions, setSearchSuggestions] = useState(0);
	const [formIsActive, setFormIsActive] = useState(false);

	const router = useRouter();

	const handleOnSubmit = (e: any) => {
		e.preventDefault();
		router.push(`/search/p=${searchProps.value}`);
		setFormIsActive(false);
	};

	return (
		<form
			onSubmit={handleOnSubmit}
			className={`relative w-full md:w-10/12 h-[50px] min-h-[50px] border ${
				formIsActive && "border-primary"
			} shadow-cmd rounded-full p-[4px] justify-between gap-2 bg-white ${customStyles}`}
		>
			<input
				type={type}
				placeholder={placeholder}
				className="w-[calc(100%-48px)] h-full outline-none bg-transparent pl-4 text-lg"
				value={searchProps.value}
				onChange={searchProps.onChange}
				onFocus={() => setFormIsActive(true)}
				onBlur={() => setFormIsActive(false)}
			/>
			{formIsActive && searchProps.value ? (
				<IconButton
					icon={<ThrobbingLoading />}
					customStyles="bg-primary cursor-auto"
				/>
			) : (
				<IconButton
					icon={<IoSearchSharp size={25} color="white" />}
					customStyles="bg-primary cursor-auto"
				/>
			)}

			{/* Show suggestions if there */}
			{formIsActive && searchProps.value && (
				<div className="hidden md:flex absolute w-full mt-[50px] left-0 rounded-xl border bg-white flex-col -z-10 shadow-clg [&>:first-child]:rounded-t-xl [&>:last-child]:rounded-b-xl">
					{Array.from(Array(6)).map((_, i) => (
						<Link
							key={i}
							href={`/search/p=${i}`}
							className="p-2 !text-dark hover:bg-primaryLight"
						>
							Burger
						</Link>
					))}
				</div>
			)}
		</form>
	);
};

export default InputSearch;
