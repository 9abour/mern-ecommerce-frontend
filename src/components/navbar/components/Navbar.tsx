"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import InputSearch from "@/components/common/inputs/InputSearch";
import User from "./User";
import ButtonCart from "@/components/common/buttons/ButtonCart";
import ButtonIcon from "@/components/common/buttons/ButtonIcon";
import { AiOutlineHeart } from "react-icons/ai";
import ButtonMenu from "@/components/common/buttons/ButtonMenu";
import MobileNavDrop from "./MobileNavDrop";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useIsWindowScrolled } from "@/hooks/useIsWindowScrolled";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClickOutside = () => {
		if (isMenuOpen) {
			setIsMenuOpen(true);
		} else {
			setIsMenuOpen(false);
		}
	};

	const ref: any = useOnClickOutside(handleClickOutside);

	return (
		<nav
			ref={ref}
			className={`fixed transition duration-200 w-full h-[70px] flex justify-between items-center gap-4 md:gap-12  ${
				useIsWindowScrolled()
					? "bg-lightGreen shadow-csm"
					: "bg-white md:bg-transparent"
			} [&>div]:flex [&>div]:items-center z-[999999999]`}
		>
			<div className="w-full justify-between md:w-[800px] md:max-w-[800px] gap-6">
				<Logo />
				<InputSearch
					type="text"
					placeholder="Search"
					customStyles="hidden md:flex md:ml-4"
				/>
			</div>
			<div className="!hidden items-center gap-2 md:!flex rounded-full bg-lightGreen pl-1">
				<ButtonCart />

				<ButtonIcon
					icon={<AiOutlineHeart size={20} color="white" />}
					bgColor="bg-dark"
				/>
				<User />
			</div>

			<ButtonMenu
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
				customStyles="bg-primary [&>button]:bg-lightGreen [&>button>span]:bg-primary"
			/>

			<MobileNavDrop isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
		</nav>
	);
};

export default Navbar;
