import LineBottom from "@/components/common/LineBottom";
import ButtonText from "@/components/common/buttons/ButtonText";
import Link from "next/link";
import React from "react";

const TextInfo = () => {
	return (
		<div className="text-white">
			<h2 className="text-3xl sm:text-[1.5rem] lg:text-4xl xl:text-6xl uppercase flex gap-2 sm:block">
				<p className="font-light mb-2">Flying Food</p>
				<b className="">Delivery</b>
			</h2>

			<div className="flex gap-1">
				<LineBottom customStyles="w-[130px] [&>div]:h-[2px] [&>div]:bg-lightGreen [&>div]:mx-0" />

				<LineBottom customStyles="w-[2px] [&>div]:h-[2px] [&>div]:bg-lightGreen [&>div]:mx-0" />
				<LineBottom customStyles="w-[2px] [&>div]:h-[2px] [&>div]:bg-lightGreen [&>div]:mx-0" />
				<LineBottom customStyles="w-[2px] [&>div]:h-[2px] [&>div]:bg-lightGreen [&>div]:mx-0" />
			</div>

			<p className="max-w-[350px] xl:text-xl">
				a patty of ground beef grilled and placed between two halves of a bun.
			</p>

			<Link href={"/"} className="dark-btn uppercase">
				Go to Details
			</Link>
		</div>
	);
};

export default TextInfo;
