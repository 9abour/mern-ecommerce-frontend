"use client";

import React from "react";
import Heading from "../common/typography/Heading";
import "swiper/css";
import CategoriesCarousel from "../common/carousels/CategoriesCarousel";

const Categories = () => {
	return (
		<div className="container mx-auto">
			<Heading text="Popular Category" />
			<CategoriesCarousel />
		</div>
	);
};

export default Categories;
