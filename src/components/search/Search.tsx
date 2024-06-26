"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Filters from "../filters/components/Filters";
import { IFilters } from "../filters/index.types";
import { getSearchResult } from "./helpers/getSearchResult";
import ProductCard from "@/components/product/production/components/product-card/ProductCard";

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
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
			inCart: false,
			rate: 4,
			categories: ["Food", "Burgers"],
			count: 1,
		},
		{
			id: "1",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
			inCart: false,
			rate: 4,
			categories: ["Food", "Burgers"],
			count: 1,
		},
		{
			id: "1",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
			inCart: false,
			rate: 4,
			categories: ["Food", "Burgers"],
			count: 1,
		},
		{
			id: "1",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
			inCart: false,
			rate: 4,
			categories: ["Food", "Burgers"],
			count: 1,
		},
		{
			id: "1",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
			inCart: false,
			rate: 4,
			categories: ["Food", "Burgers"],
			count: 1,
		},
		{
			id: "1",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
			inCart: false,
			rate: 4,
			categories: ["Food", "Burgers"],
			count: 1,
		},
		{
			id: "1",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
			inCart: false,
			rate: 4,
			categories: ["Food", "Burgers"],
			count: 1,
		},
		{
			id: "1",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
			inCart: false,
			rate: 4,
			categories: ["Food", "Burgers"],
			count: 1,
		},
		{
			id: "1",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
			inCart: false,
			rate: 4,
			categories: ["Food", "Burgers"],
			count: 1,
		},
		{
			id: "1",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
			inCart: false,
			rate: 4,
			categories: ["Food", "Burgers"],
			count: 1,
		},
	];

	const [filters, setFilters] = useState<IFilters>({
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
			</div>
		</div>
	);
};

export default Search;
