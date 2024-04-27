import IconButton from "@/components/common/button/IconButton";
import { UserProductType } from "@/components/product/products/index.types";
import { removeFromBasket } from "@/rtk/slices/basket/basketSlice";
import { useAppDispatch } from "@/rtk/store/store";
import Link from "next/link";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const BasketItem = ({ product }: { product: UserProductType }) => {
	const { id, name, price, slug } = product;
	const dispatch = useAppDispatch();

	return (
		<li className="w-full h-[30px] py-1 px-2 hover:bg-gray-100 text-gray-500 flex justify-between [&:hover>span]:hidden [&:hover>button]:flex transition-all">
			<Link href={`/product-details/${slug}`} className="text-secondaryDark">
				{name}
			</Link>
			<span>{price}$</span>
			<IconButton
				icon={<IoCloseSharp size={25} />}
				customStyles="hidden bg-transparent text-red-400 hover:bg-red-600 hover:text-white !w-[22px] !h-[22px] transition-all"
				onclick={() => {
					dispatch(removeFromBasket(id));
				}}
			/>
		</li>
	);
};

export default BasketItem;
