"use client";

import Image from "next/image";
import React, { useState } from "react";
import TextButton from "../common/button/TextButton";
import { AiFillStar } from "react-icons/ai";
import AddToCartButton from "../common/button/AddToCartButton";
import IconButton from "../common/button/IconButton";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/rtk/store/store";
import ProductCard from "../production/ProductCard";
import { productInCart } from "../cart/helper/productInCart";

const ProductDetails = () => {
	const [count, setCount] = useState(1);

	const product = {
		id: "1",
		slug: "angus-burger",
		name: "Angus Burger",
		description: "new",
		price: 10,
		discount: 10,
		image: "/burger.png",
		available: true,
		inCart: false,
		rate: 4,
		weight: "250g",
		categories: ["Food", "Burgers"],
		count: count,
		freeDelivery: true,
	};

	const { products } = useAppSelector(state => state.cartSlice);

	const inCart = productInCart(product.id, products);

	return (
		<section className="relative container mx-auto flex flex-col lg:flex-row items-center gap-[4rem] py-16 px-6 lg:px-16 shadow-clg rounded-3xl overflow-hidden z-0">
			<div className="w-full lg:w-7/12 flex flex-col gap-4 mb-auto">
				<div className="relative max-h-full px-8 py-4 z-0">
					<div className="relative w-full mx-auto rounded-xl overflow-hidden">
						<Image
							src={"/burger.png"}
							width={300}
							height={300}
							alt=""
							className="w-full h-full object-cover drop-shadow-md"
						/>
					</div>
					<div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2">
						<h3 className="text-3xl font-bold text-dark">Angus Burger</h3>
						<div>
							{Array.from(Array(3)).map((tag, index) => (
								<TextButton
									key={index}
									text="Tag"
									customStyles="bg-white hover:bg-primary font-semibold rounded-full py-2 px-4 shadow-csm border mr-2 transition-all"
								/>
							))}
						</div>
					</div>

					<div className="absolute bottom-0 left-0 w-full h-[70%] rounded-3xl bg-gradient-to-t from-gray-200 to-gray-100 -z-10 skew-x-[3deg]" />

					<span
						className={`absolute -left-3 bottom-[5%] w-2/4 h-[60%] bg-primary rounded-xl -skew-x-[-3deg] -z-20 transition-all`}
					/>
				</div>

				<div className="flex ml-8">
					{Array.from(Array(4)).map((_, i) => (
						<AiFillStar key={i} size={25} className="text-primary" />
					))}
					{Array.from(Array(5 - 4)).map((_, i) => (
						<AiFillStar key={i} size={25} className="text-gray-200" />
					))}
				</div>

				<p className="max-w-[500px] ml-8 font-semibold text-dark">
					An Angus burger is a hamburger made using beef from Angus cattle. The
					name Angus burger is used by several fast-food hamburger chains for
					one or more premium burgers.
				</p>

				<div className="flex gap-4 ml-8">
					<div className="w-fit flex items-center p-1 rounded-full bg-dark">
						<h6 className="uppercase p-2 text-white font-semibold">
							{inCart ? "In Cart" : "Add to Cart"}
						</h6>
						<AddToCartButton product={product} />
					</div>

					<div className="flex items-center gap-2">
						<IconButton
							icon={<IoIosRemove size={25} />}
							customStyles="border-2 border-dark bg-white text-dark hover:!bg-dark hover:!text-white w-[25px] h-[25px] sm:!w-[40px] sm:!h-[40px]"
							onclick={() => count > 1 && setCount(prev => prev - 1)}
						/>
						<span className="font-bold text-sm sm:text-lg">{count}</span>
						<IconButton
							icon={<IoIosAdd size={25} />}
							customStyles="border-2 border-dark bg-white text-dark hover:!bg-dark hover:!text-white w-[25px] h-[25px] sm:!w-[40px] sm:!h-[40px]"
							onclick={() => setCount(prev => prev + 1)}
						/>
					</div>
				</div>
			</div>

			{/* Suggestions Products */}
			<div className="w-full lg:w-5/12 h-fit flex flex-wrap gap-[2rem] mt-8 lg:mt-0">
				{Array.from(Array(4)).map((_, index) => (
					<ProductCard key={index} product={product} />
				))}
			</div>

			<>
				<svg
					viewBox="0 0 200 200"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute w-[400px] h-[400px] top-0 right-0 fill-primary rotate-90 -z-10"
				>
					<path
						fill="current"
						d="M46.7,-64C60.1,-54.5,70.4,-40.3,77.6,-23.9C84.8,-7.4,89,11.4,80.5,22.6C72,33.8,50.8,37.3,35.3,47.2C19.8,57.1,9.9,73.4,-4.2,79.2C-18.3,84.9,-36.6,80.2,-40.8,66.7C-45,53.1,-35.2,30.7,-35.8,14.9C-36.5,-0.9,-47.7,-10,-51.1,-21.8C-54.4,-33.6,-49.9,-48.1,-40.1,-58.8C-30.3,-69.5,-15.2,-76.4,0.7,-77.4C16.6,-78.4,33.2,-73.5,46.7,-64Z"
					/>
				</svg>

				<svg
					viewBox="0 0 200 200"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute w-[400px] h-[400px] bottom-0 -left-20 fill-primary -rotate-90 -z-10"
				>
					<path
						fill="current"
						d="M46.7,-64C60.1,-54.5,70.4,-40.3,77.6,-23.9C84.8,-7.4,89,11.4,80.5,22.6C72,33.8,50.8,37.3,35.3,47.2C19.8,57.1,9.9,73.4,-4.2,79.2C-18.3,84.9,-36.6,80.2,-40.8,66.7C-45,53.1,-35.2,30.7,-35.8,14.9C-36.5,-0.9,-47.7,-10,-51.1,-21.8C-54.4,-33.6,-49.9,-48.1,-40.1,-58.8C-30.3,-69.5,-15.2,-76.4,0.7,-77.4C16.6,-78.4,33.2,-73.5,46.7,-64Z"
					/>
				</svg>
			</>
		</section>
	);
};

export default ProductDetails;
