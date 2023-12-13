"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import ProductCard from "../production/components/product-card/ProductCard";
import Filters from "../filters/components/Filters";
import { IFilters } from "../filters/index.types";
import { getSearchResult } from "./helpers/getSearchResult";

const Search = () => {
	const currentPath = usePathname();

	const searchResult = getSearchResult(currentPath);

	const products = [
		{
			id: "1",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			rate: 4,
			weight: "250g",
			categories: ["Food", "Burgers"],
			count: 1,
			freeDelivery: true,
		},
		{
			id: "2",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			rate: 4,
			weight: "250g",
			categories: ["Food", "Burgers"],
			count: 1,
			freeDelivery: true,
		},
		{
			id: "3",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			rate: 4,
			weight: "250g",
			categories: ["Food", "Burgers"],
			count: 1,
			freeDelivery: true,
		},
		{
			id: "4",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			rate: 4,
			weight: "250g",
			categories: ["Food", "Burgers"],
			count: 1,
			freeDelivery: true,
		},
		{
			id: "5",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			rate: 4,
			weight: "250g",
			categories: ["Food", "Burgers"],
			count: 1,
			freeDelivery: true,
		},
		{
			id: "6",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			rate: 4,
			weight: "250g",
			categories: ["Food", "Burgers"],
			count: 1,
			freeDelivery: true,
		},
		{
			id: "7",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			rate: 4,
			weight: "250g",
			categories: ["Food", "Burgers"],
			count: 1,
			freeDelivery: true,
		},
		{
			id: "8",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			rate: 4,
			weight: "250g",
			categories: ["Food", "Burgers"],
			count: 1,
			freeDelivery: true,
		},
		{
			id: "9",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			rate: 4,
			weight: "250g",
			categories: ["Food", "Burgers"],
			count: 1,
			freeDelivery: true,
		},
		{
			id: "10",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			rate: 4,
			weight: "250g",
			categories: ["Food", "Burgers"],
			count: 1,
			freeDelivery: true,
		},
	];

	const [filters, setFilters] = useState<IFilters>({
		category: [],
		availability: [],
		rate: [],
		price: [0, 0],
	});

	return (
		<div className="px-4">
			<h2 className="text-center text-2xl lg:text-4xl font-semibold mb-12">
				Search results for: {searchResult}
			</h2>

			<Filters filters={filters} setFilters={setFilters} />

			<div className="flex flex-wrap justify-center gap-12 mb-16">
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
				F
			</div>
		</div>
	);
};

export default Search;
