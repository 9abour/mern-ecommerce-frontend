"use client";

import React, { useRef } from "react";
import Heading from "../common/typography/Heading";
import "swiper/css";
import CategoriesCarousel from "../common/carousels/CategoriesCarousel";
import ButtonIcon from "../common/buttons/ButtonIcon";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const AllCategories = () => {
	const swiperRef: any = useRef();

	return (
		<div className="relative container mx-auto">
			<div className="flex justify-between items-center mt-16 my-8">
				<Heading text="All Category" customStyles="!m-0" />
				<div className="w-fit flex gap-2">
					<ButtonIcon
						icon={<BsArrowLeftShort size={25} />}
						customStyles="border-2 border-dark hover:!bg-dark hover:text-white text-dark bg-transparent"
						onclick={() => swiperRef.current.slideNext()}
					/>

					<ButtonIcon
						icon={<BsArrowRightShort size={25} />}
						customStyles="border-2 border-dark hover:!bg-dark hover:text-white text-dark bg-transparent"
						onclick={() => swiperRef.current.slidePrev()}
					/>
				</div>
			</div>

			<CategoriesCarousel swiperRef={swiperRef} />
		</div>
	);
};

export default AllCategories;
