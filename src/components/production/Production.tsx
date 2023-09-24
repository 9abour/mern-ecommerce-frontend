import React from "react";
import Heading from "../common/typography/Heading";
import ProductCard from "./ProductCard";
import Tabs from "./Tabs";
import ButtonText from "../common/buttons/ButtonText";

const Production = () => {
	const data = [
		{ name: "pizz" },
		{ name: "burgers" },
		{ name: "ice cream" },
		{ name: "sushi" },
	];

	return (
		<div className="max-w-[1200px] mx-auto">
			<div className="flex flex-col lg:flex-row justify-between items-center gap-2 my-12">
				<Heading text="Our Production" customStyles="!m-0" />

				<Tabs list={data} />

				<ButtonText
					text="See All"
					customStyles="bg-transparent border-2 border-dark text-dark font-semibold text-xs hover:bg-dark hover:text-white transition-all ml-4"
				/>
			</div>

			<div className="flex flex-wrap justify-center gap-16 mb-16">
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

export default Production;
