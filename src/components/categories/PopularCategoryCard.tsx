import React from "react";
import { IPopularCategoryCard } from "./types";
import Image from "next/image";

const PopularCategoryCard = ({
	name,
	image,
	bg,
	customStyles,
	fullHeight,
}: IPopularCategoryCard) => {
	return (
		<div
			className={`relative w-full p-4 lg:p-6 rounded-[22.5px] lg:rounded-[45px] overflow-hidden h-full min-h-[150px] lg:min-h-[250px] ${
				customStyles ? customStyles : ""
			} ${bg}`}
		>
			<div className="relative w-fit flex flex-col justify-center text-primary z-10">
				<span
					className={`w-fit bg-[#ffffffcc] text-xs lg:text-2xl font-bold rounded-[45px] py-1 px-4`}
				>
					03
				</span>
				<p className="mt-1 md:mt-2 text-[10px] md:text-sx text-center font-bold text-[#ffffffcc]">
					PRODUCTS
				</p>
			</div>

			<div
				className={`absolute right-0 bottom-0 sm:bottom-8 sm:top-4 w-3/4 h-4/6 md:w-2/4 md:h-2/4 z-10 ${
					fullHeight &&
					"!w-full !h-fit !top-[50%] !translate-y-[-50%] [&>img]:w-full"
				}`}
			>
				<Image
					src={image}
					width={250}
					height={250}
					alt=""
					className={`object-cover drop-shadow-2xl`}
				/>
			</div>

			<h2 className="absolute bottom-3 lg:bottom-5 text-2xl sm:text-3xl lg:text-5xl font-bold text-white z-10">
				{name}
			</h2>

			<div
				className={`absolute w-[150px] sm:w-[200px] lg:w-[250px] right-[-50px] top-[-60px] z-0 ${
					fullHeight ? "!w-full !h-fit !top-[50%] !translate-y-[-50%]" : "w-2/4"
				}`}
			>
				<svg
					id="sw-js-blob-svg"
					viewBox="0 0 100 100"
					xmlns="http://www.w3.org/2000/svg"
				>
					{" "}
					<defs>
						{" "}
						<linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
							{" "}
							<stop
								id="stop1"
								stopColor="rgba(248, 117, 55, 1)"
								offset="0%"
								data-darkreader-inline-stopcolor=""
							></stop>{" "}
							<stop
								id="stop2"
								stopColor="rgba(251, 168, 31, 1)"
								offset="100%"
								data-darkreader-inline-stopcolor=""
							></stop>{" "}
						</linearGradient>{" "}
					</defs>{" "}
					<path
						fill="url(#sw-gradient)"
						d="M17.7,-26.7C24.6,-26.7,33,-25.3,36.7,-20.6C40.4,-15.9,39.4,-8,36.6,-1.6C33.8,4.7,29.2,9.5,24.9,13C20.5,16.6,16.4,18.9,12.3,20.2C8.2,21.4,4.1,21.5,-1.5,24.1C-7,26.6,-14.1,31.6,-19.7,31.3C-25.4,30.9,-29.7,25.3,-30.9,19.2C-32.2,13.1,-30.4,6.5,-31.9,-0.9C-33.4,-8.3,-38.1,-16.5,-36.5,-22C-34.9,-27.4,-26.9,-30.1,-19.8,-30C-12.6,-29.9,-6.3,-27,-0.5,-26.2C5.4,-25.4,10.8,-26.8,17.7,-26.7Z"
						width="100%"
						height="100%"
						transform="translate(50 50)"
						strokeWidth="0"
					></path>{" "}
				</svg>
			</div>
		</div>
	);
};

export default PopularCategoryCard;
