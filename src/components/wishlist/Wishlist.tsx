import React from "react";
import WishlistItem from "./WishlistItem";
import TextButton from "../common/button/TextButton";

const Wishlist = () => {
	return (
		<section className="w-full max-w-[900px] mx-auto bg-white shadow-clg rounded-3xl p-4">
			<h4 className="text-dark">Wishlist</h4>
			<table className="w-full">
				<WishlistItem />
				<WishlistItem />
				<WishlistItem />
			</table>
			<div className="flex justify-between gap-4 mx-4">
				<TextButton
					text="Clear all"
					customStyles="block mt-4 uppercase text-sm shadow-clg bg-red-600 hover:bg-dark hover:text-white text-white transition duration-300 font-semibold"
				/>
				<TextButton
					text="Add all"
					customStyles="block mt-4 uppercase text-sm shadow-csmYellow hover:shadow-clg bg-primary hover:bg-dark hover:text-white text-dark transition duration-300 font-semibold"
				/>
			</div>
		</section>
	);
};

export default Wishlist;
