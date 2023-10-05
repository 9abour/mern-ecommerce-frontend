"use client";

import React from "react";
import ProductCard from "../production/ProductCard";
import Filters from "../filters/components/Filters";
import Heading from "../common/typography/Heading";
import { usePathname } from "next/navigation";

const Products = () => {
	const currentProductsCategory = usePathname()
		.split("/")
		.slice(-1)
		.toString()
		.toUpperCase();

	return (
		<div className="container mx-auto px-4">
			<h3 className={`text-2xl text-dark mt-16 my-8 mx-[24px] md:mx-0`}>
				Products for - {currentProductsCategory}
			</h3>

			<Filters />
			<div className="flex flex-wrap justify-between gap-16 my-8">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
};

export default Products;
