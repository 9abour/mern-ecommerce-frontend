import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "../../categories/CategoryCard";
import { ICategory } from "@/components/categories/types";

const CategoriesCarousel = () => {
	const card: ICategory = {
		name: "Ice cream",
		color: "[#34aa74]",
		image: "",
		info: "new",
	};

	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1.5}
			breakpoints={{
				2000: {
					slidesPerView: 6.5,
				},
				1400: {
					slidesPerView: 4.5,
				},
				1200: {
					slidesPerView: 3.5,
				},
				991: {
					slidesPerView: 3.1,
				},
				800: {
					slidesPerView: 2.3,
				},
				768: {
					slidesPerView: 2.2,
				},
				640: {
					slidesPerView: 2.1,
				},
			}}
			className="md:!mx-[-24px] !px-[24px] sm"
		>
			{Array.from(Array(10)).map((_, i) => (
				<SwiperSlide>
					<CategoryCard key={i} category={card} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default CategoriesCarousel;
