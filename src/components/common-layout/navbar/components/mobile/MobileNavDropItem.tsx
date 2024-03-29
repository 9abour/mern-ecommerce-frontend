import React from "react";
import { motion, Variants } from "framer-motion";
import { IDropMotionItem } from "../../index.types";

const itemVariants: Variants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
	closed: { opacity: 1, y: 20, transition: { duration: 0.2 } },
};

const MobileNavDropItem = ({ children, customStyles }: IDropMotionItem) => {
	return (
		<motion.div
			className={`w-full mt-4 ${customStyles ? customStyles : ""}`}
			variants={itemVariants}
		>
			{children}
		</motion.div>
	);
};

export default MobileNavDropItem;
