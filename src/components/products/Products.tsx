"use client";

import React from "react";
import ProductCard from "../production/ProductCard";
import Filters from "../filters/components/Filters";
import { usePathname } from "next/navigation";

const Products = () => {
	const currentProductsCategory = usePathname()
		.split("/")
		.slice(-1)
		.toString()
		.toUpperCase();

	const product = {
		id: "1",
		name: "Angus Burger",
		description: "new",
		price: 11.2,
		discount: 10,
		image: "/burger.png",
		available: true,
		inCart: false,
		rate: 4,
		weight: "250g",
		categories: ["Food", "Burgers"],
		count: 1,
	};

	return (
		<div className="container mx-auto px-4">
			<h3
				className={`font-semibold text-2xl text-dark mt-16 my-8 mx-[24px] md:mx-0`}
			>
				Products for - {currentProductsCategory}
			</h3>

			<Filters />
			<div className="flex flex-wrap justify-between gap-16 my-8">
				<ProductCard product={product} />
				<ProductCard product={product} />
				<ProductCard product={product} />
				<ProductCard product={product} />
				<ProductCard product={product} />
				<ProductCard product={product} />
				<ProductCard product={product} />
				<ProductCard product={product} />
			</div>
		</div>
	);
};

export default Products;
