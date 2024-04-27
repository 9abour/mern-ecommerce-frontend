import IconButton from "@/components/common/button/IconButton";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineCleaningServices } from "react-icons/md";
import SearchCategoriesItem from "@/components/dashboard/components/product/SearchCategoriesItem";
import ThrobbingLoading from "@/components/common/loading/ThrobbingLoading";
import { useSelectProductCategories } from "@/components/dashboard/hooks/useSelectProductCategories";
import { useAppSelector } from "@/rtk/store/store";

const SelectProductCategories = () => {
	const {
		searchTerm,
		fetchCategories,
		handleChange,
		handleSearch,
		errorMessage,
	} = useSelectProductCategories();

	const { searchResults, selectedCategories } = useAppSelector(
		state => state.selectProductCategoriesSlice
	);

	return (
		<div className="relative w-full col-span-4">
			<div className="relative h-[50px]">
				<input
					className={`w-full h-[50px] min-h-[50px] border shadow-cmd rounded-full px-4 justify-between gap-2 text-xl bg-white outline-none focus:border-primary pr-[50px]`}
					type="text"
					name="categories"
					placeholder="Search for Categories..."
					value={searchTerm}
					onChange={handleChange}
					onKeyDown={e => {
						if (e.key === "Enter") {
							e.preventDefault();
							fetchCategories.mutate();
						}
					}}
				/>

				<IconButton
					disabled={fetchCategories.isLoading}
					icon={
						fetchCategories.isLoading ? (
							<ThrobbingLoading />
						) : searchResults.length ? (
							<MdOutlineCleaningServices size={25} className="text-dark" />
						) : (
							<IoSearchSharp size={25} className="text-dark" />
						)
					}
					onclick={handleSearch}
					customStyles="absolute top-2/4 -translate-y-2/4 right-[5px] bg-primary"
				/>
			</div>
			{errorMessage ? (
				<p className="text-red-400 ml-4">{errorMessage}</p>
			) : null}

			<div className="flex items-center gap-2 mt-2">
				{selectedCategories.map(category => (
					<SearchCategoriesItem
						key={category._id}
						category={category}
						selectedCategories={selectedCategories}
					/>
				))}
			</div>

			{searchResults.length ? (
				<div className="absolute w-full top-[50px] flex flex-wrap items-center gap-2 mt-2 bg-gray-100 border p-4 shadow-xl">
					{searchResults.map(category => (
						<SearchCategoriesItem
							key={category._id}
							category={category}
							selectedCategories={selectedCategories}
						/>
					))}
				</div>
			) : null}
		</div>
	);
};

export default SelectProductCategories;
