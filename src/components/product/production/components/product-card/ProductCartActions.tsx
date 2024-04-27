import IconButton from "@/components/common/button/IconButton";
import { UserProductType } from "@/components/product/products/index.types";
import { productInBasket } from "@/components/purchase-management/basket/helper";
import useCheckProductIn from "@/hooks/useCheckProductIn";
import { addToBasket, removeFromBasket } from "@/rtk/slices/basket/basketSlice";
import {
	addToWishlist,
	removeFromWishlist,
} from "@/rtk/slices/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@/rtk/store/store";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import { TbBasketCheck, TbBasketPlus } from "react-icons/tb";

const ProductCartActions = (product: UserProductType) => {
	const { id, slug } = product;

	const { products } = useAppSelector(state => state.wishlistSlice);
	const basketProducts = useAppSelector(state => state.basketSlice.products);
	const inWishlist = useCheckProductIn(id, products);
	const inBasket = productInBasket(id, basketProducts);

	const cartProducts = useAppSelector(state => state.cartSlice.products);
	const inCart = useCheckProductIn(id, cartProducts);

	const dispatch = useAppDispatch();

	const router = useRouter();
	return (
		<div className="opacity-0 absolute w-full h-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex justify-center items-center gap-2 transition-all">
			<IconButton
				icon={
					inWishlist ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />
				}
				customStyles={`!w-[30px] !h-[30px] bg-white shadow-cYellow ${
					inWishlist ? "" : "hover:bg-primary"
				} transition-all`}
				onclick={() =>
					dispatch(
						inWishlist ? removeFromWishlist(product) : addToWishlist(product)
					)
				}
			/>
			<IconButton
				icon={
					!inBasket ? <TbBasketPlus size={20} /> : <TbBasketCheck size={20} />
				}
				customStyles={`!w-[30px] !h-[30px] bg-white shadow-cYellow hover:bg-primary transition-all`}
				onclick={() =>
					dispatch(
						inBasket || inCart
							? removeFromBasket(product.id)
							: addToBasket(product)
					)
				}
				disabled={inCart}
			/>
			<IconButton
				icon={<BiShow size={20} />}
				customStyles="!w-[30px] !h-[30px] bg-white shadow-cYellow hover:bg-primary transition-all"
				onclick={() => router.push(`/product-details/${slug}`)}
			/>
		</div>
	);
};

export default ProductCartActions;
