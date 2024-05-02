"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./product-card/ProductCard";
import Tabs from "./Tabs";
import { useRouter } from "next/navigation";
import Heading from "@/components/common/typography/Heading";
import TextButton from "@/components/common/button/TextButton";

const Production = () => {
	const data = [
		{ name: "pizz" },
		{ name: "burgers" },
		{ name: "ice cream" },
		{ name: "sushi" },
	];
	const [isActive, setIsActive] = useState(data[0]);

	const router = useRouter();

	useEffect(() => {
		// Update the products
	}, [isActive]);

	const products = [
		{
			id: "1",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			imageUrl: "",
			inCart: false,
			rate: 4,
			categories: [],
			count: 1,
		},
		{
			id: "2",
			slug: "angus-burger",
			name: "Angus Burger",
			description: "new",
			price: 10,
			discount: 10,
			imageUrl: "",
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
			imageUrl: "",
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
			imageUrl: "",
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
			imageUrl: "",
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
			imageUrl: "",
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
			imageUrl: "",
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
			imageUrl: "",
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
			imageUrl: "",
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
			imageUrl: "",
			available: true,
			inCart: false,
			rate: 4,
			weight: "250g",
			categories: ["Food", "Burgers"],
			count: 1,
			freeDelivery: true,
		},
	];

	return (
		<section className="bg-slate-100 md:-mx-6 p-6">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row justify-between items-center gap-2 my-12">
					<Heading text="Our Production" customStyles="!m-0" />

					<Tabs list={data} isActive={isActive} setIsActive={setIsActive} />

					<TextButton
						text="See All"
						customStyles="bg-transparent border-2 border-dark text-dark font-semibold text-xs hover:bg-dark hover:text-white transition-all ml-4"
						onclick={() => router.push(`/products/${isActive.name}`)}
					/>
				</div>

				<div className="flex flex-wrap justify-center gap-16 mb-16">
					{products.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Production;
