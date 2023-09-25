import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "../../categories/CategoryCard";
import { ICategory } from "@/components/categories/types";

const CategoriesCarousel = () => {
	const card: ICategory = {
		name: "Angus Burger",
		color: "[#fbc644]",
		image: "",
		info: "new",
	};

	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1.5}
			autoplay={true}
			breakpoints={{
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
			}}
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
