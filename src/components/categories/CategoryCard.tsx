import React from "react";
import { ICategory } from "./types";
import img from "../../../public/burger.png";
import Image from "next/image";
import ButtonIcon from "../common/buttons/ButtonIcon";
import { BsArrowRightShort } from "react-icons/bs";

const CategoryCard = ({ category }: { category: ICategory }) => {
	const { name, color, info } = category;

	return (
		<div className="h-[300px] grid items-center">
			<div className="relative w-[250px] h-[180px] bg-white shadow-clg rounded-xl p-4">
				<div
					className={`absolute w-[150px] h-[150px] top-[-50px] left-[50%] translate-x-[-50%] rounded-full bg-[#fbc644] shadow-clg`}
				>
					<Image
						src={img}
						width={150}
						height={150}
						alt=""
						className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] min-w-[150px]"
					/>
				</div>

				<div className="mt-[90px] flex justify-between items-end">
					<div>
						<span className={`uppercase text-${color} text-sm font-semibold`}>
							{info}
						</span>
						<h4 className="text-2xl font-semibold text-dark">{name}</h4>
					</div>

					<ButtonIcon
						icon={<BsArrowRightShort size={25} />}
						bgColor={"bg-" + color}
						customStyles="text-white"
					/>
				</div>
			</div>
		</div>
	);
};

export default CategoryCard;
