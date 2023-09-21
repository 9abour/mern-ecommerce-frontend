import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { IButtonMenu } from "@/components/common/buttons/types";
import InputSearch from "@/components/common/inputs/InputSearch";
import User from "./User";
import { NavbarHelper } from "../helpers/navbar.helper";
import MobileNavDropItem from "./MobileNavDropItem";
import NavbarMobileLink from "./NavbarMobileLink";
import { useMediaQuery } from "react-responsive";

const MobileNavDrop = ({ isMenuOpen, setIsMenuOpen }: IButtonMenu) => {
	const isMidScreenValue = useMediaQuery({ query: "(max-width: 768px)" });

	useEffect(() => {
		if (isMenuOpen) {
			setIsMenuOpen(isMidScreenValue);
		}
	}, [isMidScreenValue]);

	return (
		<motion.div
			initial={isMenuOpen}
			animate={isMenuOpen ? "open" : "closed"}
			variants={{
				open: {
					clipPath: "inset(0% 0% 0% 0% round 0)",
					transition: {
						type: "spring",
						bounce: 0,
						duration: 0.7,
						delayChildren: 0.3,
						staggerChildren: 0.05,
					},
				},
				closed: {
					clipPath: "inset(0% 0% 100% 0% round 0)",
					transition: {
						type: "spring",
						bounce: 0,
						duration: 0.3,
					},
				},
			}}
			className={`absolute w-full top-[70px] left-0 bg-secondaryDark flex flex-col md z-[1]`}
		>
			<MobileNavDropItem translate="y" customStyles="flex gap-2">
				<InputSearch
					type="text"
					placeholder="Search"
					customStyles="flex md:hidden ml-2"
				/>
				<User />
			</MobileNavDropItem>
			{/* 
			<MobileNavDropItem translate="y">
				<div className="flex items-center gap-2 px-2">
					<ButtonIcon
						icon={<AiOutlineHeart size={20} color="white" />}
						bgColor="bg-dark"
					/>
					<ButtonCart />
				</div>
			</MobileNavDropItem> */}

			<ul className="w-full p-2">
				{Array.from(Array(6)).map((_, i) => (
					<MobileNavDropItem translate="y" customStyles="!m-0">
						<NavbarMobileLink key={i} href={`/${i}`} name="Navbar Link" />
					</MobileNavDropItem>
				))}
			</ul>
		</motion.div>
	);
};

export default MobileNavDrop;
