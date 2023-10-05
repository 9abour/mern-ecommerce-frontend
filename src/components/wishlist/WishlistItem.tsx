import Image from "next/image";
import React from "react";
import burger from "../../../public/burger.png";
import IconButton from "../common/button/IconButton";
import { IoCloseSharp } from "react-icons/io5";
import ButtonCart from "../common/button/CartButton";

const WishlistItem = () => {
	return (
		<tbody>
			<tr className="bg-gray-200 flex justify-between items-center gap-1 sm:gap-2 rounded-2xl p-2 md:p-3 mt-4">
				<td className="flex items-center gap-2">
					<IconButton
						icon={<IoCloseSharp size={25} />}
						customStyles="bg-transparent text-red-600 hover:bg-red-600 hover:text-white w-[25px] h-[25px] sm:!w-[40px] sm:!h-[40px]"
					/>
					<div className="w-[60px] h-[50px] md:w-[100px] md:h-[80px] bg-white rounded-xl p-2">
						<Image
							src={burger}
							width={70}
							height={70}
							alt=""
							className="w-full my-auto"
						/>
					</div>
					<div>
						<h4 className="font-semibold text-dark text-sm sm:text-xl lg:text-2xl">
							Burger
						</h4>
						<span className="text-dark">$20.99</span>
						<span className="block text-secondaryDark text-xs sm:text-sm">
							October 3, 2023
						</span>
					</div>
				</td>

				<td className="flex items-center gap-2">
					<span className="font-semibold text-xs sm:text-sm">
						Add to Cart -&gt;{" "}
					</span>
					<ButtonCart />
				</td>
			</tr>
		</tbody>
	);
};
export default WishlistItem;
