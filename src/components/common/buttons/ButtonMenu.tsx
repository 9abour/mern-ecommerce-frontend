"use client";

import React, { useState } from "react";
import { IButtonMenu } from "./types";

const ButtonMenu = ({
	isMenuOpen,
	setIsMenuOpen,
	customStyles,
}: IButtonMenu) => {
	return (
		<div
			className={`relative flex md:!hidden w-[60px] min-w-[60px] h-[50px] items-center gap-1 bg-dark py-2 px-1 rounded-l-full ${customStyles}`}
		>
			<button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className="w-[40px] min-w-[40px] h-[40px] min-h-[40px] py-[12px] flex flex-col justify-between items-center rounded-full bg-secondaryDark [&>span]:w-[22px] [&>span]:h-[2px] [&>span]:rounded-full [&>span]:bg-white"
			>
				<span
					className={`
          ${
						isMenuOpen ? "translate-y-[7px] rotate-[-45deg]" : ""
					} transition duration-500`}
				></span>
				<span
					className={`${
						isMenuOpen ? "opacity-0" : "opacity-100"
					} transition duration-500`}
				></span>
				<span
					className={`${
						isMenuOpen ? "translate-y-[-7px] rotate-[45deg]" : ""
					} transition duration-500`}
				></span>
			</button>
		</div>
	);
};

export default ButtonMenu;
