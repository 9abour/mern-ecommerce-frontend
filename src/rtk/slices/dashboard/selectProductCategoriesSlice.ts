import { CategoryType } from "@/components/dashboard/types/index.types";
import { createSlice } from "@reduxjs/toolkit";

export type SelectProductCategoriesSliceType = {
	selectedCategories: CategoryType[];
	searchResults: CategoryType[];
	selectedCategoriesIds: string[];
};

const initialState: SelectProductCategoriesSliceType = {
	selectedCategories: [],
	searchResults: [],
	selectedCategoriesIds: [],
};

const selectProductCategoriesSlice = createSlice({
	name: "selectProductCategories",
	initialState,
	reducers: {
		clearSearchResults: state => {
			state.searchResults = [];
		},
		toggleCategorySelection: (state, action) => {
			const { category, isNewCategory } = action.payload;

			if (state.selectedCategories.length <= 0 || isNewCategory) {
				state.selectedCategories.push(category);
				state.selectedCategoriesIds.push(category._id);
				return;
			}

			const filteredList = state.selectedCategories.filter(
				storedCategory => storedCategory._id !== category._id
			);

			const selectedCategoriesIdsFiltered = state.selectedCategoriesIds.filter(
				storedCategory => storedCategory !== category._id
			);

			state.selectedCategories = filteredList;
			state.selectedCategoriesIds = selectedCategoriesIdsFiltered;
		},
		setSearchResults: (state, action) => {
			state.searchResults = action.payload;
		},
	},
});

export default selectProductCategoriesSlice.reducer;
export const { clearSearchResults, toggleCategorySelection, setSearchResults } =
	selectProductCategoriesSlice.actions;
