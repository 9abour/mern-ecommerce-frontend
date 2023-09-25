import Image from "next/image";
import React from "react";
import burger from "../../../public/burger.png";
import ButtonCart from "../common/buttons/ButtonCart";
import { AiFillStar } from "react-icons/ai";

const ProductCard = () => {
	return (
		<div className="relative w-[250px] h-[340px]">
			<div className="relative w-full h-full bg-white shadow-clg rounded-xl skew-x-[3deg] py-8 px-6 grid items-center text-center gap-1 [&>*]:skew-x-[-3deg] z-10">
				<div className="w-full h-full rounded-xl bg-slate-100">
					<Image
						src={burger}
						width={250}
						height={250}
						alt=""
						className="w-[180px] h-full mx-auto"
					/>
				</div>

				<h4 className="text-xl font-semibold">Angus Burger</h4>
				<p className="text-slate-300 text-sm uppercase">Available</p>

				<div className="flex justify-center">
					<AiFillStar className="text-primary" />
					<AiFillStar className="text-primary" />
					<AiFillStar className="text-primary" />
					<AiFillStar className="text-primary" />
					<AiFillStar className="text-primary" />
				</div>

				<span className="text-xl font-extrabold">$ 11.20</span>
			</div>

			<ButtonCart customStyles="relative mt-[-20px] mx-auto z-10" />

			<span className="absolute top-0 w-2/4 h-full rounded-xl bg-primaryBlue skew-x-[-3deg] z-0"></span>
		</div>
	);
};

export default ProductCard;
