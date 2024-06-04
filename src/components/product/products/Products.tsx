"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../production/components/product-card/ProductCard";
import { usePathname } from "next/navigation";
import { getCurrentProductsCategory } from "./helpers";
import { IFilters } from "@/components/filters/index.types";
import Filters from "@/components/filters/components/Filters";

const Products = () => {
	const currentPath = usePathname();

	const currentProductsCategory = getCurrentProductsCategory(currentPath);

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
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
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
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
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
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
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
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
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
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
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
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
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
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
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
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
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
			imageUrl:
				"https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-burger-png-images-png-image_10146424.png",
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
		availability: [],
		rate: [],
		price: [0, 100],
	});

	const { availability, rate, price } = filters;

	console.log({ availability, rate, price });

	useEffect(() => {}, [filters]);

	return (
		<div className="container mx-auto px-4">
			<h3
				className={`font-semibold text-4xl text-dark mt-16 my-8 mx-[24px] md:mx-0 capitalize`}
			>
				{currentProductsCategory} products
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
