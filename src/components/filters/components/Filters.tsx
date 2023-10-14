"use client";

import React, { useState } from "react";
import Select from "@/components/common/Select";
import { RangeSlider } from "rsuite";
import InputSearch from "@/components/common/input/InputSearch";
import InputProductSearch from "@/components/common/input/InputProductSearch";

const Filters = () => {
	const [rangePrice, setRangePrice] = useState<[number, number]>([0, 10]);
	const [options, setOptions] = useState<any>([
		{
			id: 0,
			content: "burger1",
			isSelected: false,
		},
		{
			id: 1,
			content: "burger2",
			isSelected: false,
		},
		{
			id: 2,
			content: "burger3",
			isSelected: false,
		},
	]);

	return (
		<>
			<div className="flex flex-col sm:flex-row items-center gap-4 my-4">
				<div className="flex items-center justify-center sm:justify-start gap-4 container px-4 md:px-0 mx-auto [&>:first-child>div]:left-0 [&>:first-child>div]:translate-x-0 [&>:last-child>div]:left-auto [&>:last-child>div]:right-0 [&>:last-child>div]:translate-x-0">
					<Select options={options} setOptions={setOptions} label="Category" />
					<Select
						options={options}
						setOptions={setOptions}
						label="Availability"
					/>
					<Select options={options} setOptions={setOptions} label="type" />
					<Select options={options} setOptions={setOptions} label="rating" />
				</div>

				<div className="w-full max-w-[500px] flex items-center justify-center gap-4 px-4 md:px-0">
					<span className="text-[12px] lg:text-sm uppercase font-semibold">
						Pricing
					</span>
					<RangeSlider
						defaultValue={[10, 50]}
						handleStyle={{ backgroundColor: "#2E2E2E" }}
						renderTooltip={num => "$" + num}
						value={rangePrice}
						onChange={setRangePrice}
						className="w-full"
					/>
				</div>
			</div>
		</>
	);
};

export default Filters;