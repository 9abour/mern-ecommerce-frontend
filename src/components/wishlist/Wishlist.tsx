"use client";

import React from "react";
import WishlistItem from "./WishlistItem";
import TextButton from "../common/button/TextButton";
import { useAppDispatch, useAppSelector } from "@/rtk/store/store";
import { addToCart } from "@/rtk/slices/cart/cartSlice";
import { clearWishlist } from "@/rtk/slices/wishlist/wishlistSlice";

const Wishlist = () => {
	const { products } = useAppSelector(state => state.wishlistSlice);

	const dispatch = useAppDispatch();

	const handleAddAllToCart = () => {
		products.map(product => {
			dispatch(addToCart(product));
		});
	};

	return (
		<section className="w-full max-w-[900px] mx-auto bg-white shadow-clg rounded-3xl p-4">
			{products.length ? (
				<>
					<h4 className="text-2xl font-semibold text-dark">Wishlist</h4>
					<table className="w-full">
						{products.map(product => (
							<WishlistItem key={product.id} product={product} />
						))}
					</table>
					<div className="flex justify-between gap-4 mx-4">
						<TextButton
							text="Clear all"
							customStyles="block mt-4 uppercase text-sm shadow-clg bg-red-600 hover:bg-dark hover:text-white text-white transition duration-300 font-semibold"
							onclick={() => dispatch(clearWishlist())}
						/>
						<TextButton
							text="Add all"
							customStyles="block mt-4 uppercase text-sm shadow-csmYellow hover:shadow-clg bg-primary hover:bg-dark hover:text-white text-dark transition duration-300 font-semibold"
							onclick={handleAddAllToCart}
						/>
					</div>
				</>
			) : (
				<div className="p-8 text-gray-300 w-fit mx-auto text-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="300"
						height="300"
						viewBox="0 0 20 20"
					>
						<g fill="currentColor">
							<path
								fillRule="evenodd"
								d="M11 6.722c1.69-3.023 7.5-1.968 7.5 2.4c0 2.918-2.5 5.582-7.5 7.993c-5-2.41-7.5-5.075-7.5-7.993c0-4.368 5.81-5.423 7.5-2.4Z"
								clipRule="evenodd"
								opacity=".2"
							/>
							<path
								fillRule="evenodd"
								d="M5.618 4.618C4.185 4.966 3 6.07 3 7.996c0 2.564 2.169 5.073 7 7.448c4.831-2.375 7-4.884 7-7.448c0-1.925-1.185-3.03-2.618-3.378c-1.471-.358-3.122.103-3.979 1.27a.5.5 0 0 1-.806 0C8.74 4.721 7.089 4.26 5.618 4.618Zm4.382.21C8.81 3.635 6.968 3.26 5.382 3.645C3.565 4.088 2 5.546 2 7.996c0 3.24 2.766 6.032 7.783 8.454a.5.5 0 0 0 .434 0C15.234 14.028 18 11.237 18 7.996c0-2.45-1.565-3.908-3.382-4.35c-1.586-.385-3.427-.01-4.618 1.181Z"
								clipRule="evenodd"
							/>
							<path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727L1.151 1.878Z" />
						</g>
					</svg>
					<h3 className="font-semibold text-4xl">Your wishlist is empty!</h3>
				</div>
			)}
		</section>
	);
};

export default Wishlist;
