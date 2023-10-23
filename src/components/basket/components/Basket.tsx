"use client";

import React, { useState, useEffect } from "react";
import BasketItem from "./BasketItem";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/rtk/store/store";
import { IProduct } from "@/components/products/types";
import { getTotal } from "../helper/getTotal";
import { addToCart } from "@/rtk/slices/cart/cartSlice";
import { clearBasket } from "@/rtk/slices/basket/basketSlice";

const Basket = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { products } = useAppSelector(state => state.basketSlice);

	const dispatch = useAppDispatch();

	const handleAddAllToCart = () => {
		products.map(product => {
			dispatch(addToCart(product));
		});
		dispatch(clearBasket());
	};

	useEffect(() => {
		if (products.length === 0) {
			setIsOpen(true);
		}
	}, [products]);

	return (
		<div className="fixed bottom-0 right-4 w-[250px] h-fit rounded-t-lg border shadow-csm overflow-hidden bg-gray-50 z-50">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full bg-gray-100 text-secondaryDark p-2 flex justify-between border-b"
			>
				<h6 className="">Your Basket</h6>
				<span>{products.length} Items</span>
			</button>

			<motion.div
				initial={isOpen}
				animate={isOpen ? "open" : "closed"}
				variants={{
					open: {
						bottom: 0,
						height: products.length ? "auto" : 0,
						transition: {
							type: "spring",
							bounce: 0,
							duration: 0.7,
							delayChildren: 0.3,
							staggerChildren: 0.05,
						},
					},
					closed: {
						height: 0,
						transition: {
							type: "spring",
							bounce: 0,
							duration: 0.3,
						},
					},
				}}
			>
				<ul className="m-0 border-b">
					{products.map((product: IProduct, i) => (
						<BasketItem key={i} product={product} />
					))}
				</ul>

				<div className="py-1 px-2 flex justify-between border-b text-secondaryDark">
					<h6>Total</h6>
					<span>{getTotal(products)}$</span>
				</div>

				<div className="flex justify-between items-center mx-2 gap-4">
					<button
						className="py-4 rounded-full uppercase text-xs text-red-600 hover:text-red-700 transition duration-300 font-semibold"
						onClick={() => dispatch(clearBasket())}
					>
						Clear
					</button>
					<button
						className="py-4 rounded-full uppercase text-xs text-gray-500 hover:text-dark transition duration-300 font-semibold"
						onClick={handleAddAllToCart}
					>
						Add to cart
					</button>
				</div>
			</motion.div>
		</div>
	);
};

export default Basket;
