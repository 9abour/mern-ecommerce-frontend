import Image from "next/image";
import React from "react";
import { IoIosRemove, IoIosAdd } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import {
	ICartProduct,
	decreaseProductCount,
	increaseProductCount,
	removeFromCart,
} from "@/rtk/slices/cart/cartSlice";
import { useAppDispatch } from "@/rtk/store/store";
import IconButton from "@/components/common/button/IconButton";
import Rate from "@/components/common/product/Rate";

const TableItem = ({ product }: { product: ICartProduct }) => {
	const { id, name, price, imageUrl, count, rate } = product;
	const dispatch = useAppDispatch();
	return (
		<tbody>
			<tr className="bg-gray-200 flex justify-between items-center gap-1 sm:gap-2 rounded-2xl p-2 md:p-3 mt-4">
				<td className="w-[80px] h-[60px] md:w-[80px] md:h-[80px] bg-white rounded-xl p-2">
					<Image
						src={imageUrl}
						width={70}
						height={70}
						alt=""
						className="w-full my-auto"
					/>
				</td>
				<td>
					<h4 className="font-semibold text-dark text-sm sm:text-xl lg:text-2xl">
						{name}
					</h4>
					<Rate rateNumber={rate} size={16} />
				</td>
				<td className="flex justify-center items-center gap-2">
					<IconButton
						icon={<IoIosRemove size={25} />}
						customStyles="bg-white text-dark hover:!bg-dark hover:!text-white w-[25px] h-[25px] sm:!w-[40px] sm:!h-[40px]"
						onclick={() => dispatch(decreaseProductCount(id))}
					/>
					<span className="font-bold text-sm sm:text-lg">{count}</span>
					<IconButton
						icon={<IoIosAdd size={25} />}
						customStyles="bg-white text-dark hover:!bg-dark hover:!text-white w-[25px] h-[25px] sm:!w-[40px] sm:!h-[40px]"
						onclick={() => dispatch(increaseProductCount(id))}
					/>
				</td>
				<td>
					<span className="h-full sm:text-xl font-bold text-dark">
						${price}
					</span>
				</td>
				<td className="md:px-2">
					<IconButton
						icon={<IoCloseSharp size={25} />}
						customStyles="bg-transparent text-red-400 hover:bg-red-600 hover:text-white w-[25px] h-[25px] sm:!w-[40px] sm:!h-[40px]"
						onclick={() => dispatch(removeFromCart(product))}
					/>
				</td>
			</tr>
		</tbody>
	);
};

export default TableItem;
