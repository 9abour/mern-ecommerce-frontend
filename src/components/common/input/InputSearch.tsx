"use client";

import React, { useState } from "react";
import { IInputSearch } from "./types";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import ThrobbingLoading from "../loading/ThrobbingLoading";
import { useSubmitSearch } from "./hooks/useSubmitSearch";
import useInput from "@/components/common-layout/form/hooks/useInput";

const InputSearch = ({ type, placeholder, customStyles }: IInputSearch) => {
	const { value, changeValue, reset } = useInput("");
	const [formIsActive, setFormIsActive] = useState(false);

	const { submit } = useSubmitSearch({
		searchProps: value,
		setFormIsActive,
		reset,
	});

	return (
		<form
			onSubmit={submit}
			className={`relative w-full md:w-10/12 h-[50px] min-h-[50px] border ${
				formIsActive && "border-primary"
			} shadow-cmd rounded-full p-[4px] justify-between gap-2 bg-white ${customStyles}`}
		>
			<input
				type={type}
				placeholder={placeholder}
				className="w-[calc(100%-48px)] h-full outline-none bg-transparent pl-4 text-lg"
				value={value}
				onChange={changeValue}
				onFocus={() => setFormIsActive(true)}
				onBlur={() => setFormIsActive(false)}
			/>

			<div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-primary cursor-auto transition-all">
				{formIsActive && value ? (
					<ThrobbingLoading />
				) : (
					<IoSearch size={25} className="text-dark" />
				)}
			</div>

			{/* Show suggestions if there */}
			{formIsActive && value && (
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
