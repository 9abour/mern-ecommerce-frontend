import useInput from "@/components/common-layout/form/hooks/useInput";
import { getSearchCategoriesMutation } from "@/components/dashboard/mutations/getSearchCategories";
import {
	CategoryType,
	SelectedCategory,
} from "@/components/dashboard/types/index.types";
import {
	clearSearchResults,
	setSearchResults,
} from "@/rtk/slices/dashboard/selectProductCategoriesSlice";
import { useAppDispatch, useAppSelector } from "@/rtk/store/store";
import { useState } from "react";
import { useMutation } from "react-query";

const useSelectProductCategories = () => {
	const {
		value: searchTerm,
		changeValue: handleChange,
		reset: resetSearch,
	} = useInput("");

	const [errorMessage, setErrorMessage] = useState("");

	const dispatch = useAppDispatch();
	const { searchResults } = useAppSelector(
		state => state.selectProductCategoriesSlice
	);

	const fetchCategories = useMutation(
		() => getSearchCategoriesMutation(searchTerm),
		{
			onSuccess: ({ data }) => {
				dispatch(setSearchResults(data));
				setErrorMessage("");
			},
			onError: ({ response }) => {
				const { data } = response;
				const { errors } = data;

				setErrorMessage(errors[0]);
				dispatch(setSearchResults([]));
			},
		}
	);

	const handleClearSearchResults = () => {
		dispatch(clearSearchResults());
		resetSearch();
	};

	const handleSearch = () => {
		if (searchTerm && !searchResults.length) {
			fetchCategories.mutate();
			return;
		} else {
			handleClearSearchResults();
		}
	};

	return {
		searchTerm,
		errorMessage,
		fetchCategories,
		handleChange,
		handleClearSearchResults,
		handleSearch,
	};
};

export { useSelectProductCategories };
