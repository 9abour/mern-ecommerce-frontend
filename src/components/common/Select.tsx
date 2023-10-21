import React, { useState } from "react";
import { ISelect } from "./types";
import { BiSolidDownArrowSquare } from "react-icons/bi";
import { Variants, motion } from "framer-motion";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { FiltersHelper } from "../filters/helpers/filters.helper";
import { Checkbox } from "rsuite";

const optionsAnimate = {
	open: {
		clipPath: "inset(0% 0% 0% 0% round 0)",
		transition: {
			type: "spring",
			bounce: 0,
			duration: 0.7,
			delayChildren: 0.2,
			staggerChildren: 0.05,
		},
	},
	closed: {
		clipPath: "inset(0% 0% 100% 0% round 0)",
		transition: {
			type: "spring",
			bounce: 0,
			duration: 0.2,
		},
	},
};

const optionVariants: Variants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},

	closed: {
		opacity: 0,
		y: -20,
		transition: { duration: 0.2 },
	},
};

const Select = ({ label, options, setOptions }: ISelect) => {
	const [optionsIsOpen, setOptionsIsOpen] = useState(false);

	let ref: any = useOnClickOutside(() => setOptionsIsOpen(false));

	return (
		<div className="relative" ref={ref}>
			<button
				onClick={() => setOptionsIsOpen(!optionsIsOpen)}
				className="flex items-center gap-1 text-secondaryDark"
			>
				<span className="text-[12px] lg:text-sm uppercase font-semibold">
					{label}
				</span>
				<BiSolidDownArrowSquare
					className={`${
						optionsIsOpen ? "rotate-180" : "rotate-0"
					} transition-all duration-300 `}
				/>
			</button>

			<motion.div
				initial="closed"
				animate={optionsIsOpen ? "open" : "closed"}
				variants={optionsAnimate}
				className="absolute mt-1 left-2/4 translate-x-[-50%] w-fit min-w-[8rem] lg:min-w-[10rem] p-2 bg-dark rounded-lg [&>:not(:first-child)]:mt-2 !shadow-clg border-[1.5px] border-secondaryDark z-50"
			>
				{options.map(option => (
					<motion.div key={option.id} variants={optionVariants}>
						<Checkbox
							className="w-full text-xs lg:text-sm font-semibold text-gray-200 bg-secondaryDark rounded-lg"
							checked={option.isSelected}
							onChange={() =>
								setOptions(FiltersHelper.selectOption(option.id, options))
							}
						>
							{option.content}
						</Checkbox>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Select;
