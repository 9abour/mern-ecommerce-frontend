export type CategoryType = {
	color: string;
	imageUrl: string;
	name: string;
	products: string[];
	slug: string;
	__v: number;
	_id: string;
};

export interface SelectedCategory extends CategoryType {
	selected?: boolean;
}

export type SearchCategoriesItemProps = {
	selectedCategories: CategoryType[];
	category: CategoryType;
};
