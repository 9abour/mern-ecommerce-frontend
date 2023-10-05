import Image from "next/image";
import React from "react";
import burger from "../../../public/burger.png";
import IconButton from "../common/button/IconButton";
import { IoIosRemove, IoIosAdd } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const TableItem = () => {
	return (
		<tbody>
			<tr className="bg-gray-200 flex justify-between items-center gap-1 sm:gap-2 rounded-2xl p-2 md:p-3 mt-4">
				<td className="w-[80px] h-[60px] md:w-[100px] md:h-[80px] bg-white rounded-xl p-2">
					<Image
						src={burger}
						width={70}
						height={70}
						alt=""
						className="w-full my-auto"
					/>
				</td>
				<td>
					<span className="font-semibold bg-primary text-secondaryDark rounded-full px-2 text-xs sm:text-sm">
						Free Delivery
					</span>
					<h4 className="text-dark text-sm sm:text-xl lg:text-2xl">Burger</h4>
					<span className="font-semibold bg-gray-300 text-secondaryDark rounded-full px-2">
						400g
					</span>
				</td>
				<td className="flex justify-center items-center gap-2">
					<IconButton
						icon={<IoIosRemove size={25} />}
						customStyles="bg-white text-dark hover:!bg-dark hover:!text-white w-[25px] h-[25px] sm:!w-[40px] sm:!h-[40px]"
					/>
					<span className="font-bold text-sm sm:text-lg">1</span>
					<IconButton
						icon={<IoIosAdd size={25} />}
						customStyles="bg-white text-dark hover:!bg-dark hover:!text-white w-[25px] h-[25px] sm:!w-[40px] sm:!h-[40px]"
					/>
				</td>
				<td>
					<span className="h-full sm:text-xl font-bold text-dark">$20.99</span>
				</td>
				<td className="md:px-2">
					<IconButton
						icon={<IoCloseSharp size={25} />}
						customStyles="bg-transparent text-red-600 hover:bg-red-600 hover:text-white w-[25px] h-[25px] sm:!w-[40px] sm:!h-[40px]"
					/>
				</td>
			</tr>
		</tbody>
	);
};

export default TableItem;
