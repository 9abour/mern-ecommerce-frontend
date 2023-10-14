"use client";

import React, { useRef } from "react";
import TextInfo from "./TextInfo";
import Image from "next/image";
import IconButton from "@/components/common/button/IconButton";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
	const swiperRef: any = useRef();

	return (
		<section className="relative w-full mx-auto ml-auto md:w-[calc(100%+24px)] h-[35rem] mt-[-86px] bg-gradient-to-l from-primary to-primaryDark md:rounded-bl-[45px] overflow-hidden">
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
				{Array.from(Array(10)).map((_, i) => (
					<SwiperSlide key={i} className="pl-4">
						<div className="h-full flex flex-col-reverse sm:flex-row justify-center items-center md:!mx-[-24px] !px-[24px] py-[70px]">
							<TextInfo />
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
				width={400}
				height={400}
				src="/hero-bg.jpg"
				alt="heroShapes"
				className="w-full h-full absolute top-0 left-0 opacity-5 object-cover z-0"
			/>
		</section>
	);
};

export default Hero;
