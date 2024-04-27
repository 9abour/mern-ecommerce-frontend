import React from "react";
import { AiFillStar } from "react-icons/ai";

const Rate = ({
	rateNumber,
	size,
	customStyles = "",
}: {
	rateNumber: number;
	size: number;
	customStyles?: string;
}) => {
	return (
		<div className={`flex ${customStyles}`}>
			{Array.from(Array(rateNumber)).map((_, i) => (
				<AiFillStar key={i} size={size} className="text-primary" />
			))}
			{Array.from(Array(5 - rateNumber)).map((_, i) => (
				<AiFillStar key={i} size={size} className="text-gray-400" />
			))}
		</div>
	);
};

export default Rate;
