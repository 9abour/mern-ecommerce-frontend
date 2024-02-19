import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProductCardStars = ({ rate }: { rate: number }) => {
	return (
		<div className="flex justify-center">
			{Array.from(Array(5)).map((_, i) => {
				if (i < rate) return <AiFillStar key={i} className="text-primary" />;
				else return <AiFillStar key={i} className="text-gray-200" />;
			})}
		</div>
	);
};

export default ProductCardStars;
