"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import InputSearch from "@/components/common/inputs/InputSearch";
import User from "./User";
import ButtonCart from "@/components/common/buttons/ButtonCart";
import ButtonIcon from "@/components/common/buttons/ButtonIcon";
import { AiOutlineHeart } from "react-icons/ai";
import ButtonMenu from "@/components/common/buttons/ButtonMenu";
import { NavbarHelper } from "../helpers/navbar.helper";
import MobileNavDrop from "./MobileNavDrop";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav
			className={`fixed transition duration-200 backdrop-blur-md shadow-sm w-full h-[70px] flex justify-between items-center gap-4 md:gap-12 ${
				NavbarHelper.getIsWindowScrolled() ? "bg-[#e2f9eed1]" : "bg-white"
			} [&>div]:flex [&>div]:items-center`}
		>
			<div className="w-full justify-between md:w-[800px] md:max-w-[800px] gap-6">
				<Logo />
				<InputSearch
					type="text"
					placeholder="Search"
					customStyles="hidden md:flex"
				/>
			</div>
			<div className="!hidden items-center gap-2 md:!flex">
				<ButtonIcon
					icon={<AiOutlineHeart size={20} color="white" />}
					bgColor="bg-dark"
				/>
				<ButtonCart />
				<User />
			</div>

			<ButtonMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

			<MobileNavDrop isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
		</nav>
	);
};

export default Navbar;
