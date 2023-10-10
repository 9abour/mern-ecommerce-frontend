import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import AddToCartButton from "../common/button/AddToCartButton";
import { IProduct } from "../products/types";

const ProductCard = ({ product }: { product: IProduct }) => {
	const { name, price, image, available, rate } = product;

	return (
		<div className="relative w-[250px] h-[340px] mx-auto">
			<div className="relative w-full h-full bg-white shadow-clg rounded-xl skew-x-[3deg] py-8 px-6 grid items-center text-center gap-1 [&>*]:skew-x-[-3deg] z-10">
				<div className="w-full h-full rounded-xl bg-slate-100">
					<Image
						src={image}
						width={250}
						height={250}
						alt=""
						className="w-[180px] h-full mx-auto drop-shadow-xl"
					/>
				</div>

				<h4 className="text-xl font-semibold">{name}</h4>
				<p className="text-slate-300 text-sm uppercase">
					{available ? "Available" : "Not Available"}
				</p>

				<div className="flex justify-center">
					{Array.from(Array(rate)).map((_, i) => (
						<AiFillStar key={i} className="text-primary" />
					))}
					{Array.from(Array(5 - rate)).map((_, i) => (
						<AiFillStar key={i} className="text-gray-200" />
					))}
				</div>

				<span className="text-xl font-extrabold">$ {price}</span>
			</div>

			<AddToCartButton
				customStyles="relative mt-[-20px] mx-auto z-10"
				product={product}
			/>

			<span className="absolute top-0 w-2/4 h-full rounded-xl bg-primaryBlue skew-x-[-3deg] z-0"></span>
		</div>
	);
};

export default ProductCard;
