"use client";

import React, { useRef } from "react";
import TextInfo from "./TextInfo";
import Image from "next/image";
import burger from "../../../../public/burger.png";
import IconButton from "@/components/common/buttons/IconButton";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
	const swiperRef: any = useRef();

	return (
		<section className="relative w-full mx-auto ml-auto md:w-[calc(100%+24px)] h-[45rem] sm:h-[35rem] mt-[-86px] bg-gradient-to-l from-primary to-primaryDark md:rounded-bl-[45px] pt-[70px]">
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
						<div className="h-full flex flex-col-reverse sm:flex-row justify-center items-center md:!mx-[-24px] !px-[24px]">
							<TextInfo />
							<Image
								src={burger}
								width={400}
								height={400}
								alt=""
								className="w-full sm:w-3/6 md:w-4/6 max-w-[500px] drop-shadow-2xl"
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
		</section>
	);
};

export default Hero;
