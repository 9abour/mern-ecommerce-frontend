import Image from "next/image";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import {
	IWishlistProduct,
	removeFromWishlist,
} from "@/rtk/slices/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@/rtk/store/store";
import useCheckProductIn from "@/hooks/useCheckProductIn";
import IconButton from "@/components/common/button/IconButton";
import AddToCartButton from "@/components/common/button/AddToCartButton";

const WishlistItem = ({ product }: { product: IWishlistProduct }) => {
	const { id, image, name, price, history } = product;
	const dispatch = useAppDispatch();
	const { products } = useAppSelector(state => state.cartSlice);
	const inCart = useCheckProductIn(product.id, products);

	return (
		<tbody>
			<tr className="bg-gray-200 flex justify-between items-center gap-1 sm:gap-2 rounded-2xl p-2 md:p-3 mt-4">
				<td className="flex items-center gap-2">
					<IconButton
						icon={<IoCloseSharp size={25} />}
						customStyles="bg-transparent text-red-600 hover:bg-red-600 hover:text-white w-[25px] h-[25px] sm:!w-[40px] sm:!h-[40px]"
						onclick={() => dispatch(removeFromWishlist(product))}
					/>
					<div className="w-[60px] h-[50px] md:w-[100px] md:h-[80px] bg-white rounded-xl p-2">
						<Image
							src={image}
							width={70}
							height={70}
							alt=""
							className="w-full my-auto"
						/>
					</div>
					<div>
						<h4 className="font-semibold text-dark text-sm sm:text-xl lg:text-2xl">
							{name}
						</h4>
						<span className="text-dark">$ {price}</span>
						<span className="block text-secondaryDark text-xs sm:text-sm">
							{history}
						</span>
					</div>
				</td>

				<td className="flex items-center gap-2">
					{inCart ? (
						<span className="font-semibold text-xs sm:text-sm">In Cart</span>
					) : (
						<span className="font-semibold text-xs sm:text-sm">
							Add to Cart{" "}
						</span>
					)}
					<AddToCartButton product={product} />
				</td>
			</tr>
		</tbody>
	);
};
export default WishlistItem;
