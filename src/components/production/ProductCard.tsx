import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import AddToCartButton from "../common/button/AddToCartButton";
import { IProduct } from "../products/types";
import IconButton from "../common/button/IconButton";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "@/rtk/store/store";
import {
	addToWishlist,
	removeFromWishlist,
} from "@/rtk/slices/wishlist/wishlistSlice";
import { useCheckProductIn } from "@/hooks/useCheckProductIn";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => {
	const { id, slug, name, price, image, available, rate } = product;

	const dispatch = useAppDispatch();
	const { products } = useAppSelector(state => state.wishlistSlice);
	const cartProducts = useAppSelector(state => state.cartSlice.products);
	const inWishlist = useCheckProductIn(id, products);
	const inCart = useCheckProductIn(id, cartProducts);

	const router = useRouter();

	return (
		<div
			className={`relative w-[200px] h-[280px] mx-auto [&>span]:hover:bg-primary`}
		>
			<div
				className={`[&>div>div]:hover:opacity-100 relative w-full h-full bg-white border border-transparent hover:border-primary shadow-clg rounded-xl skew-x-[3deg] py-8 px-6 grid items-center text-center gap-1 [&>*]:skew-x-[-3deg] z-10 transition-all`}
			>
				<div className="relative w-full h-full rounded-xl overflow-hidden">
					<div className="w-full h-full">
						<Image
							src={image}
							width={250}
							height={250}
							alt=""
							className="w-full h-full mx-auto drop-shadow-xl"
						/>
					</div>

					<div className="absolute bottom-0 left-0 w-full h-[70%] rounded-lg bg-gray-100 -z-10 skew-x-[3deg]" />

					<div className="opacity-0 absolute w-full h-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex justify-center items-center gap-2 transition-all">
						<IconButton
							icon={
								inWishlist ? (
									<AiFillHeart className="text-primary" size={20} />
								) : (
									<AiOutlineHeart size={20} />
								)
							}
							customStyles={`w-[30px] h-[30px] bg-white shadow-cYellow ${
								inWishlist ? "" : "hover:bg-primary"
							} transition-all`}
							onclick={() =>
								dispatch(
									inWishlist
										? removeFromWishlist(product)
										: addToWishlist(product)
								)
							}
						/>
						<IconButton
							icon={<BiShow size={20} />}
							customStyles="w-[30px] h-[30px] bg-white shadow-cYellow hover:bg-primary transition-all"
							onclick={() => router.push(`/product-details/${slug}`)}
						/>
					</div>
				</div>

				<Link
					href={`/product-details/${slug}`}
					className="!text-dark text-xl font-semibold"
				>
					{name}
				</Link>
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

			<span
				className={`absolute top-0 w-2/4 h-full ${
					inCart ? "bg-primary" : "bg-primaryBlue"
				} rounded-xl skew-x-[-3deg] z-0 transition-all`}
			></span>
		</div>
	);
};
export default ProductCard;
