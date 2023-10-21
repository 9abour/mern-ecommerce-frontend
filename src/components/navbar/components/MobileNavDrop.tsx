import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IMenuButton } from "@/components/common/button/types";
import InputSearch from "@/components/common/input/InputSearch";
import User from "./User";
import NavbarMobileLink from "./NavbarMobileLink";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";

const MobileNavDrop = ({ isMenuOpen, setIsMenuOpen }: IMenuButton) => {
	const isMidScreenValue = useMediaQuery({ query: "(max-width: 768px)" });

	const [height, setHeight] = useState(0);

	const refHeight = useRef<HTMLDivElement | null>(null);
	const pathname = usePathname();

	useEffect(() => {
		if (refHeight.current) {
			setHeight(refHeight.current.offsetHeight);
		}
	}, [refHeight]);

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
			ref={refHeight}
			initial={isMenuOpen}
			animate={isMenuOpen ? "open" : "closed"}
			variants={{
				open: {
					y: 0,
					transition: {
						type: "spring",
						bounce: 0,
						duration: 0.7,
						delayChildren: 0.3,
						staggerChildren: 0.05,
					},
				},
				closed: {
					y: -height - 70,
					transition: {
						type: "spring",
						bounce: 0,
						duration: 0.3,
					},
				},
			}}
			className={`fixed w-full top-[70px] left-0 bg-secondaryDark flex flex-col rounded-b-xl pt-8 pb-4 z-10`}
		>
			<div className="flex gap-2">
				<InputSearch
					type="text"
					placeholder="Search"
					customStyles="flex md:hidden ml-2"
				/>
				<User />
			</div>

			<div className="w-full p-2">
				<ul>
					<NavbarMobileLink href={`/`} name="Home" />
					<NavbarMobileLink href={`/cart`} name="Cart" />
					<NavbarMobileLink href={`/wishlist`} name="Wishlist" />
					<NavbarMobileLink href={`/categories`} name="Categories" />
				</ul>
			</div>
		</motion.div>
	);
};

export default MobileNavDrop;
