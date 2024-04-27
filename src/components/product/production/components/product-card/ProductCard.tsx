import Image from "next/image";
import React from "react";
import { UserProductType } from "../../../products/index.types";
import { useAppSelector } from "@/rtk/store/store";
import Link from "next/link";
import ProductCartActions from "./ProductCartActions";
import ProductCardStars from "./ProductCardStars";
import useCheckProductIn from "@/hooks/useCheckProductIn";
import AddToCartButton from "@/components/common/button/AddToCartButton";
import Rate from "@/components/common/product/Rate";

const ProductCard = ({ product }: { product: UserProductType }) => {
	const { id, slug, name, price, imageUrl, rate, count } = product;

	const cartProducts = useAppSelector(state => state.cartSlice.products);
	const inCart = useCheckProductIn(id, cartProducts);

	return (
		<div
			className={`relative w-[200px] h-[280px] mx-auto [&>span]:hover:bg-primary`}
		>
			<div
				className={`[&>div>div]:hover:opacity-100 relative w-full h-full bg-white border border-transparent hover:border-primary shadow-clg rounded-xl skew-x-[3deg] py-8 px-6 grid items-center text-center gap-1 [&>*]:skew-x-[-3deg] z-10 transition-all`}
			>
				<div className="relative w-full h-full rounded-xl overflow-hidden">
					<div className="w-[150px]">
						<Image
							src={imageUrl}
							width={150}
							height={150}
							alt=""
							className="mx-auto drop-shadow-xl object-cover"
						/>
					</div>

					<div className="absolute bottom-0 left-0 w-full h-[70%] rounded-lg bg-gray-100 -z-10 skew-x-[3deg]" />

					<ProductCartActions {...product} />
				</div>

				<Link
					href={`/product-details/${slug}`}
					className="!text-dark text-xl font-semibold"
				>
					{name}
				</Link>

				<p className="text-slate-300 text-sm uppercase">
					{count ? `Available (${count})` : "Not Available"}
				</p>

				<Rate rateNumber={rate} size={16} customStyles={`flex-jc-c`} />

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
