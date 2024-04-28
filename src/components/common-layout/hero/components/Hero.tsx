"use client";

import React, { useRef } from "react";
import TextInfo from "./TextInfo";
import Image from "next/image";
import IconButton from "@/components/common/button/IconButton";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { UserProductType } from "@/components/product/products/index.types";

const Hero = () => {
	const swiperRef: any = useRef();

	const product: UserProductType = {
		id: "1",
		slug: "angus-burger",
		name: "Angus Burger",
		description:
			"a patty of ground beef grilled and placed between two halves of a bun.",
		price: 11.2,
		imageUrl: "/burger.png",
		inCart: false,
		discount: 0,
		rate: 4,
		categories: ["Food", "Burgers"],
		count: 1,
	};

	return (
		<section className="relative w-full mx-auto ml-auto md:w-[calc(100%+24px)] h-[35rem] mt-[-86px] bg-gradient-to-b from-primary to-primaryDark md:rounded-bl-[45px] overflow-hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				viewBox="0 0 800 800"
				className="absolute"
			>
				<defs>
					<filter
						id="bbblurry-filter"
						x="-100%"
						y="-100%"
						width="400%"
						height="400%"
						filterUnits="objectBoundingBox"
						primitiveUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feGaussianBlur
							stdDeviation="130"
							x="0%"
							y="0%"
							width="100%"
							height="100%"
							in="SourceGraphic"
							edgeMode="none"
							result="blur"
						></feGaussianBlur>
					</filter>
				</defs>
				<g filter="url(#bbblurry-filter)">
					<ellipse
						rx="150"
						ry="150"
						cx="623.7197814448562"
						cy="291.4283306967216"
						fill="hsla(55, 46%, 77%, 1.00)"
					></ellipse>
					<ellipse
						rx="150"
						ry="150"
						cx="235.91708158839492"
						cy="628.0714784784092"
						fill="hsla(55, 45%, 77%, 1.00)"
					></ellipse>
					<ellipse
						rx="150"
						ry="150"
						cx="355.6087320099564"
						cy="309.5323628994293"
						fill="hsla(55, 100%, 50%, 1.00)"
					></ellipse>
				</g>
			</svg>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				loop={true}
				autoplay={true}
				onSwiper={swiper => {
					swiperRef.current = swiper;
				}}
				className="h-full"
			>
				{Array.from(Array(5)).map((_, i) => (
					<SwiperSlide key={i} className="pl-4">
						<div className="h-full flex flex-col-reverse sm:flex-row justify-center items-center md:!mx-[-24px] !px-[24px] py-[70px]">
							<TextInfo product={product} />
							<Image
								src="/burger.png"
								width={400}
								height={400}
								alt=""
								className="w-4/6 sm:w-3/6 md:w-4/6 max-w-[500px] drop-shadow-2xl"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="absolute right-0 bottom-0 flex gap-2 m-8 z-10">
				<IconButton
					icon={<BsArrowLeftShort size={25} />}
					customStyles="border-2 border-dark hover:!bg-dark hover:text-white text-dark"
					onclick={() => swiperRef.current.slideNext()}
				/>

				<IconButton
					icon={<BsArrowRightShort size={25} />}
					customStyles="border-2 border-dark hover:!bg-dark hover:text-white text-dark"
					onclick={() => swiperRef.current.slidePrev()}
				/>
			</div>

			<Image
				src="/hero-bg.jpg"
				alt="heroShapes"
				loading="eager"
				fill={true}
				className="w-full h-full absolute top-0 left-0 opacity-[2%] object-cover z-0"
			/>
		</section>
	);
};

export default Hero;
