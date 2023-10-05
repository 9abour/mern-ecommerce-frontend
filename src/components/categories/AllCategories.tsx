"use client";

import React, { useRef } from "react";
import Heading from "../common/typography/Heading";
import "swiper/css";
import CategoriesCarousel from "../common/carousel/CategoriesCarousel";
import IconButton from "../common/button/IconButton";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const AllCategories = () => {
	const swiperRef: any = useRef();

	return (
		<section className="relative container mx-auto">
			<div className="flex justify-between items-center mt-16 my-8">
				<Heading text="All Category" customStyles="!m-0 px-4" />
				<div className="w-fit flex gap-2 px-4">
					<IconButton
						icon={<BsArrowLeftShort size={25} />}
						customStyles="border-2 border-dark hover:!bg-dark hover:text-white text-dark bg-transparent"
						onclick={() => swiperRef.current.slideNext()}
					/>

					<IconButton
						icon={<BsArrowRightShort size={25} />}
						customStyles="border-2 border-dark hover:!bg-dark hover:text-white text-dark bg-transparent"
						onclick={() => swiperRef.current.slidePrev()}
					/>
				</div>
			</div>

			<CategoriesCarousel swiperRef={swiperRef} />
		</section>
	);
};

export default AllCategories;
