import CategoryCard from "@/components/category/components/CategoryCard";
import { ICategory } from "@/components/category/index.types";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const breakpoints = {
	1200: {
		slidesPerView: 4,
	},
	991: {
		slidesPerView: 3,
	},
	800: {
		slidesPerView: 2,
	},
	768: {
		slidesPerView: 2,
	},
	640: {
		slidesPerView: 2.1,
	},
};

const CategoriesCarousel = ({ swiperRef }: any) => {
	const card: ICategory = {
		name: "Angus Burger",
		color: "[#fbc644]",
		imageUrl:
			"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
		info: "new",
	};

	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1.5}
			autoplay
			loop={true}
			onSwiper={swiper => {
				swiperRef.current = swiper;
			}}
			breakpoints={breakpoints}
			className="md:!mx-[-24px] !px-[24px] sm"
		>
			{Array.from(Array(10)).map((_, i) => (
				<SwiperSlide key={i}>
					<CategoryCard key={i} category={card} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default CategoriesCarousel;
