import IconButton from "@/components/common/button/IconButton";
import { SearchCategoriesItemProps } from "@/components/dashboard/types/index.types";
import useToggle from "@/hooks/useToggle";
import { toggleCategorySelection } from "@/rtk/slices/dashboard/selectProductCategoriesSlice";
import { useAppDispatch } from "@/rtk/store/store";
import React from "react";
import { FaCheck, FaPlus } from "react-icons/fa6";

const SearchCategoriesItem = ({
	category,
	selectedCategories,
}: SearchCategoriesItemProps) => {
	const { name } = category;

	const isCategorySelected = selectedCategories.some(cat => {
		if (cat._id === category._id) {
			return true;
		} else {
			return false;
		}
	});

	const { toggle: toggle, currentState: isToggled } =
		useToggle(isCategorySelected);

	const dispatch = useAppDispatch();

	const handleToggleCategory = () => {
		toggle();

		if (isToggled) {
			dispatch(toggleCategorySelection({ category, isNewCategory: false }));
		} else {
			dispatch(toggleCategorySelection({ category, isNewCategory: true }));
		}
	};

	return (
		<div className="flex items-center justify-between gap-2 bg-primary shadow-md pr-4 rounded-full text-lg">
			<IconButton
				icon={isToggled ? <FaCheck size={20} /> : <FaPlus size={20} />}
				onclick={handleToggleCategory}
				customStyles="bg-gray-100 hover:bg-dark hover:text-white"
			/>
			<p>{name}</p>
		</div>
	);
};

export default SearchCategoriesItem;
