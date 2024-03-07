import React from "react";
import { motion, Variants } from "framer-motion";
import { IDropMotionItem } from "@/components/common-layout/navbar/index.types";

const itemVariantsY: Variants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
const itemVariantsX: Variants = {
	open: {
		opacity: 1,
		x: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};

const DropMotionItem = ({
	children,
	customStyles,
	translate,
}: IDropMotionItem) => {
	return (
		<motion.div
			className={`w-full mt-4 ${customStyles}`}
			variants={translate === "y" ? itemVariantsY : itemVariantsX}
		>
			{children}
		</motion.div>
	);
};

export default DropMotionItem;
