import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { IMenuButton } from "@/components/common/button/types";
import InputSearch from "@/components/common/input/InputSearch";
import User from "./User";
import MobileNavDropItem from "./MobileNavDropItem";
import NavbarMobileLink from "./NavbarMobileLink";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";

const MobileNavDrop = ({ isMenuOpen, setIsMenuOpen }: IMenuButton) => {
	const isMidScreenValue = useMediaQuery({ query: "(max-width: 768px)" });

	const pathname = usePathname();

	useEffect(() => {
		if (isMenuOpen) {
			setIsMenuOpen(isMidScreenValue);
		}
	}, [isMidScreenValue]);

	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

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

			<div className="w-full p-2">
				<MobileNavDropItem translate="y" customStyles="!m-0">
					<ul>
						<NavbarMobileLink href={`/cart`} name="Cart" />
						<NavbarMobileLink href={`/wishlist`} name="Wishlist" />
						<NavbarMobileLink href={`/menu`} name="Menu" />
						<NavbarMobileLink href={`/categories`} name="Categories" />
					</ul>
				</MobileNavDropItem>
			</div>
		</motion.div>
	);
};

export default MobileNavDrop;
