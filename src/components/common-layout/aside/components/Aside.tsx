"use client";

import React, { useState, useEffect, Ref } from "react";
import Menu from "./Menu";
import { motion } from "framer-motion";
import DropMotionItem from "./DropItem";
import { useMediaQuery } from "usehooks-ts";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import MenuButton from "@/components/common/button/MenuButton";
import SignOff from "@/components/common/button/SignOff";
import LineBottom from "@/components/common/line/LineBottom";

const Aside = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [display, setDisplay] = useState("");
	const isMidScreenValue = useMediaQuery("(max-width: 768px)");

	useEffect(() => {
		setIsMenuOpen(!isMidScreenValue);
	}, [isMidScreenValue]);

	function handleOnClickOutside() {
		setIsMenuOpen(false);
	}

	let ref: Ref<any> = useOnClickOutside(handleOnClickOutside, isMidScreenValue);

	useEffect(() => {
		if (isMenuOpen) {
			setDisplay("");
		} else {
			setTimeout(() => {
				setDisplay("none");
			}, 500);
		}
	}, [isMenuOpen]);

	return (
		<div ref={ref} className="fixed z-50">
			<MenuButton
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
				customStyles="!rounded-l-[0px] rounded-r-full justify-end my-4"
			/>

			<motion.div
				initial={isMenuOpen}
				animate={isMenuOpen ? "open" : "closed"}
				variants={{
					open: {
						x: 0,
						width: "auto",
						transition: {
							type: "spring",
							bounce: 0,
							duration: 0.7,
							delayChildren: 0.4,
							staggerChildren: 0.05,
						},
					},
					closed: {
						x: "-250px",
						display: display,
						transition: {
							type: "spring",
							bounce: 0,
							duration: 0.5,
						},
					},
				}}
			>
				<aside
					className={`w-[200px] max-w-[200px] h-[calc(100vh-152px)] md:h-[calc(100vh-84px)] rounded-tr-[45px] bg-dark mr-6 mt-4 pt-4 shadow-slate-100 overflow-y-scroll aside-container`}
				>
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
