import React from "react";
import { ICategory } from "../index.types";
import Image from "next/image";
import IconButton from "../../common/button/IconButton";
import { BsArrowRightShort } from "react-icons/bs";

const CategoryCard = ({ category }: { category: ICategory }) => {
	const { name, color, info, imageUrl } = category;
	return (
		<div className="h-[300px] grid items-center">
			<div className="relative w-[250px] h-[180px] bg-white shadow-clg rounded-xl p-4 [&>div>button]:hover:mr-0 cursor-pointer">
				<div
					className={`absolute w-[150px] h-[150px] top-[-50px] left-[50%] translate-x-[-50%] rounded-full bg-[#fbc644] shadow-circleYellow`}
				>
					<Image
						src={imageUrl}
						width={150}
						height={150}
						alt=""
						className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] min-w-[150px] drop-shadow-xl"
					/>
				</div>

				<div className="mt-[90px] flex justify-between items-end gap-2">
					<div>
						<span className={`uppercase text-[#fbc644] text-sm font-semibold`}>
							{info}
						</span>
						<h4 className="text-2xl font-semibold text-dark line-clamp-1 transition-all">
							{name}
						</h4>
					</div>

					<IconButton
						icon={<BsArrowRightShort size={25} />}
						bgColor={"bg-" + color}
						customStyles="text-white mr-4 duration-300 ease-in-out"
						onclick={() => console.log("Category Card")}
					/>
				</div>
			</div>
		</div>
	);
};

export default CategoryCard;
