import Filters from "@/components/filters/components/Filters";
import ProductCard from "@/components/production/ProductCard";
import React from "react";

const page = () => {
	return (
		<div className="container mx-auto px-4">
			<Filters />
			<div className="flex flex-wrap justify-between gap-16 mb-16">
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

export default page;
