import useInput from "@/components/common-layout/form/hooks/useInput";
import IconButton from "@/components/common/button/IconButton";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const SelectProductCategories = () => {
	const { value, changeValue, reset } = useInput("");
	const [selectedCategories, setSelectedCategories] = useState<any>([]);

	const removeCategory = (name: string) => {
		const filtered = selectedCategories.filter(cat => cat.name !== name);
		setSelectedCategories(filtered);
	};

	const addCategory = (name: string) => {
		setSelectedCategories(prev => [...prev, { name }]);
		reset();
	};

	return (
		<div>
			<input
				className={`w-full h-[50px] min-h-[50px] border shadow-cmd rounded-full px-4 justify-between gap-2 text-xl bg-white outline-none focus:border-primary`}
				type="text"
				name="categories"
				placeholder="Select Categories"
				value={value}
				onChange={changeValue}
				onKeyDown={e => {
					if (e.key === "Enter") {
						e.preventDefault();
						addCategory(value);
					}
				}}
			/>

			<div className="w-full flex flex-wrap items-center gap-2 mt-2">
				{selectedCategories.map(cat => (
					<div
						key={cat.name}
						className="flex items-center justify-between gap-2 bg-primary shadow-md pr-4 rounded-full text-lg"
					>
						<IconButton
							icon={<IoCloseSharp size={20} />}
							onclick={() => removeCategory(cat.name)}
							customStyles="bg-gray-100 hover:bg-red-600 hover:text-white"
						/>
						<p>{cat.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SelectProductCategories;
