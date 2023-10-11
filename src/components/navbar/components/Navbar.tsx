"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import InputSearch from "@/components/common/input/InputSearch";
import User from "./User";
import CartButton from "@/components/common/button/CartButton";
import IconButton from "@/components/common/button/IconButton";
import { AiOutlineHeart } from "react-icons/ai";
import MenuButton from "@/components/common/button/MenuButton";
import MobileNavDrop from "./MobileNavDrop";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useIsWindowScrolled } from "@/hooks/useIsWindowScrolled";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/rtk/store/store";

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

	const router = useRouter();

	const { products } = useAppSelector(state => state.wishlistSlice);

	return (
		<nav
			ref={ref}
			className={`fixed transition duration-200 w-full h-[70px] flex justify-between items-center gap-4 md:gap-12 bg-white ${
				useIsWindowScrolled()
					? "bg-primaryLight shadow-csm"
					: "bg-white md:bg-white"
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
			<div className="!hidden items-center gap-2 md:!flex rounded-full bg-white pl-1">
				<CartButton />

				<div className="relative">
					<IconButton
						icon={<AiOutlineHeart size={20} color="white" />}
						customStyles="bg-dark"
						onclick={() => router.push("/wishlist")}
					/>
					<span className="absolute w-[50%] h-[50%] -top-[6px] -right-[6px] rounded-full text-xs font-bold bg-secondaryDark text-white text-center flex justify-center items-center">
						{products.length}
					</span>
				</div>
				<User />
			</div>

			<MenuButton
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
				customStyles="bg-primary [&>button]:bg-white [&>button>span]:bg-primary"
			/>

			<MobileNavDrop isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
		</nav>
	);
};

export default Navbar;
