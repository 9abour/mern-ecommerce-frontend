import React, { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { IButtonMenu } from "@/components/common/buttons/types";
import InputSearch from "@/components/common/inputs/InputSearch";
import User from "./User";
import ButtonIcon from "@/components/common/buttons/ButtonIcon";
import { AiOutlineHeart } from "react-icons/ai";
import ButtonCart from "@/components/common/buttons/ButtonCart";
import { NavbarHelper } from "../helpers/navbar.helper";

const itemVariants: Variants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const MobileNavDrop = ({ isMenuOpen, setIsMenuOpen }: IButtonMenu) => {
	const isMidScreenValue = NavbarHelper.getIsMidScreen();

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
			className={`absolute w-full h-[150px] top-[70px] left-0 bg-secondaryDark flex flex-col md`}
		>
			<motion.div
				variants={itemVariants}
				className="w-full flex justify-between gap-4 mt-4"
			>
				<InputSearch
					type="text"
					placeholder="Search"
					customStyles="flex md:hidden ml-2"
				/>
				<User />
			</motion.div>
			<motion.div variants={itemVariants} className="w-full my-4">
				<div className="flex items-center gap-2 px-2">
					<ButtonIcon
						icon={<AiOutlineHeart size={20} color="white" />}
						bgColor="bg-dark"
					/>
					<ButtonCart />
				</div>
			</motion.div>
		</motion.div>
	);
};

export default MobileNavDrop;
