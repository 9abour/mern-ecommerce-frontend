"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../production/components/product-card/ProductCard";
import Filters from "../filters/components/Filters";
import { usePathname } from "next/navigation";
import { IFilters } from "../filters/index.types";
import { FiltersHelper } from "../filters/helpers/filters.helper";

const Products = () => {
	const currentProductsCategory = usePathname()
		.split("/")
		.slice(-1)
		.toString()
		.toUpperCase();

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
			rate: 5,
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
			rate: 3,
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
			price: 45,
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
			price: 11,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			rate: 2,
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
			price: 56,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			rate: 5,
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
			price: 44,
			discount: 10,
			image: "/burger.png",
			available: false,
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
			price: 34,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			rate: 1,
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
			price: 78,
			discount: 10,
			image: "/burger.png",
			available: false,
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
			price: 57,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			rate: 3,
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
			price: 39,
			discount: 10,
			image: "/burger.png",
			available: false,
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
		price: [0, 100],
	});

	const { category, availability, rate, price } = filters;

	useEffect(() => {}, [filters]);

	return (
		<div className="container mx-auto px-4">
			<h3
				className={`font-semibold text-2xl text-dark mt-16 my-8 mx-[24px] md:mx-0`}
			>
				Products for - {currentProductsCategory}
			</h3>

			<Filters filters={filters} setFilters={setFilters} />
			<div className="flex flex-wrap justify-between gap-16 my-8">
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Products;
