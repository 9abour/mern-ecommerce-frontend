"use client";

import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import LineBottom from "../../common/LineBottom";
import SignOff from "../../common/buttons/SignOff";
import ButtonMenu from "../../common/buttons/ButtonMenu";
import { motion } from "framer-motion";
import DropMotionItem from "./DropItem";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useMediaQuery } from "usehooks-ts";

const Aside = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isMidScreenValue = useMediaQuery("(max-width: 768px)");

	useEffect(() => {
		setIsMenuOpen(!isMidScreenValue);
	}, [isMidScreenValue]);

	function handleOnClickOutside() {
		setIsMenuOpen(false);
	}

	let ref: any = useOnClickOutside(handleOnClickOutside, isMidScreenValue);

	return (
		<div ref={ref} className="fixed z-10">
			<ButtonMenu
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
				customStyles="!rounded-l-[0px] rounded-r-full justify-end my-4"
			/>

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
						clipPath: "inset(0% 100% 0% 0% round 0)",
						transition: {
							type: "spring",
							bounce: 0,
							duration: 0.3,
						},
					},
				}}
			>
				<aside className="w-[200px] max-w-[200px] h-[calc(100vh-152px)] md:h-[calc(100vh-86px)] rounded-tr-[45px] bg-dark mr-6 mt-4 pt-4 shadow-slate-100 overflow-y-scroll aside-container">
					<DropMotionItem translate="x">
						<Menu />
					</DropMotionItem>
					<DropMotionItem translate="x">
						<Menu />
					</DropMotionItem>
					<DropMotionItem translate="x">
						<SignOff />
					</DropMotionItem>
					<DropMotionItem translate="x" customStyles="my-8">
						<LineBottom />
					</DropMotionItem>
				</aside>
			</motion.div>
		</div>
	);
};

export default Aside;
