"use client";

import React, { useEffect, useState } from "react";
import Select from "@/components/common/select/Select";
import { RangeSlider } from "rsuite";
import { IFiltersProps } from "@/components/search/types";
import { IFilterOptions } from "../index.types";
import { FiltersHelper } from "../helpers/filters.helper";

const Filters = ({ filters, setFilters }: IFiltersProps) => {
	const [rangePrice, setRangePrice] = useState<[number, number]>([0, 100]);

	const [category, setCategory] = useState<IFilterOptions[]>([
		{
			id: "0",
			content: "Burgers",
			isSelected: false,
		},
		{
			id: "1",
			content: "Food",
			isSelected: false,
		},
		{
			id: "2",
			content: "Burgers",
			isSelected: false,
		},
	]);

	const [availability, setAvailability] = useState<IFilterOptions[]>([
		{
			id: "0",
			content: "Available",
			isSelected: false,
		},
	]);

	const [rating, setRating] = useState<IFilterOptions[]>([
		{
			id: "0",
			content: "1 star",
			isSelected: false,
		},
		{
			id: "1",
			content: "2 star",
			isSelected: false,
		},
		{
			id: "2",
			content: "3 star",
			isSelected: false,
		},
		{
			id: "3",
			content: "4 star",
			isSelected: false,
		},
		{
			id: "4",
			content: "5 star",
			isSelected: false,
		},
	]);

	useEffect(() => {
		const selectedCategories = FiltersHelper.getSelectedOptions(category);
		const selectedAvailability = FiltersHelper.getSelectedOptions(availability);
		const selectedRating = FiltersHelper.getSelectedOptions(rating);

		setFilters({
			category: selectedCategories,
			availability: selectedAvailability,
			rate: selectedRating,
			price: rangePrice,
		});
	}, [rangePrice, category, availability, rating]);

	return (
		<>
			<div className="flex flex-col-reverse sm:flex-row items-center gap-4 my-4">
				<div className="flex items-center justify-center sm:justify-start gap-4 container px-4 md:px-0 mx-auto [&>:first-child>div]:left-0 [&>:first-child>div]:translate-x-0 [&>:last-child>div]:left-auto [&>:last-child>div]:right-0 [&>:last-child>div]:translate-x-0">
					<Select
						options={category}
						setOptions={setCategory}
						label="Category"
					/>
					<Select
						options={availability}
						setOptions={setAvailability}
						label="Availability"
					/>
					<Select options={rating} setOptions={setRating} label="rating" />
				</div>

				<div className="w-full max-w-[500px] flex flex-col mx-8">
					<div className="text-start flex justify-between mb-2 font-semibold [&>span]:w-full">
						<span>{rangePrice[0]}$</span>
						<span className="text-center text-[12px] lg:text-sm uppercase font-semibold">
							Pricing
						</span>
						<span className="text-end">{rangePrice[1]}$</span>
					</div>
					<RangeSlider
						defaultValue={rangePrice}
						handleStyle={{ backgroundColor: "#2E2E2E" }}
						renderTooltip={num => "$" + num}
						value={rangePrice}
						onChange={setRangePrice}
					/>
				</div>
			</div>
		</>
	);
};

export default Filters;
