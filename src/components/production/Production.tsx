"use client";

import React, { useEffect, useState } from "react";
import Heading from "../common/typography/Heading";
import ProductCard from "./ProductCard";
import Tabs from "./Tabs";
import TextButton from "../common/button/TextButton";
import { useRouter } from "next/navigation";

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
		</section>
	);
};

export default Production;
