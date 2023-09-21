"use client";

import React, { useEffect, useMemo, useState } from "react";
import Logo from "./Logo";
import InputSearch from "@/components/common/inputs/InputSearch";
import User from "./User";
import ButtonCart from "@/components/common/buttons/ButtonCart";
import ButtonIcon from "@/components/common/buttons/ButtonIcon";
import { AiOutlineHeart } from "react-icons/ai";
import ButtonMenu from "@/components/common/buttons/ButtonMenu";
import { NavbarHelper } from "../helpers/navbar.helper";

const Navbar = () => {
	return (
		<nav
			style={{ transition: "top 1s linear" }}
			className={`${
				NavbarHelper.isWindowScrolled() ? "fixed duration-500" : "relative"
			} w-full h-[70px] flex justify-between items-center gap-4 md:gap-12 bg-white [&>div]:flex [&>div]:items-center transition shadow-csm duration-500 delay-500`}
		>
			<div className="w-full justify-between md:w-[800px] md:max-w-[800px] gap-6">
				<Logo />
				<InputSearch type="text" placeholder="Search" />
			</div>
			<div className="!hidden items-center gap-2 md:!flex">
				<ButtonIcon
					icon={<AiOutlineHeart size={20} color="white" />}
					bgColor="bg-dark"
				/>
				<ButtonCart />
				<User />
			</div>

			<ButtonMenu />
		</nav>
	);
};

export default Navbar;
