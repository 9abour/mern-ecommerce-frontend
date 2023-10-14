import LineBottom from "@/components/common/LineBottom";
import Link from "next/link";
import React from "react";

const TextInfo = () => {
	return (
		<div className="text-white">
			<h2 className="max-w-[400px] text-3xl sm:text-[1.5rem] lg:text-4xl xl:text-5xl font-bold uppercase">
				Flying Food Delivery
			</h2>

			<div className="flex gap-1">
				<LineBottom customStyles="w-[130px] [&>div]:h-[2px] [&>div]:bg-lightYellow [&>div]:mx-0" />

				<LineBottom customStyles="w-[2px] [&>div]:h-[2px] [&>div]:bg-lightYellow [&>div]:mx-0" />
				<LineBottom customStyles="w-[2px] [&>div]:h-[2px] [&>div]:bg-lightYellow [&>div]:mx-0" />
				<LineBottom customStyles="w-[2px] [&>div]:h-[2px] [&>div]:bg-lightYellow [&>div]:mx-0" />
			</div>

			<p className="max-w-[350px] xl:text-xl font-medium">
				a patty of ground beef grilled and placed between two halves of a bun.
			</p>

			<Link
				href={"/"}
				className="text-gray-200 hover:text-white dark-btn uppercase"
			>
				Go to Details
			</Link>
		</div>
	);
};

export default TextInfo;
