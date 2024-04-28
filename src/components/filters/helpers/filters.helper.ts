import { UserProductType } from "@/components/product/products/index.types";
import { IFilterOptions } from "../index.types";

export class FiltersHelper {
	public static selectOption(
		id: string,
		list: IFilterOptions[]
	): IFilterOptions[] {
		const updatedList = list.map(option => {
			if (option.id === id) {
				return {
					...option,
					isSelected: !option.isSelected,
				};
			}
			return option;
		});

		return updatedList;
	}

	public static getSelectedOptions(
		options: IFilterOptions[]
	): IFilterOptions[] {
		const selected = options.filter(option => option.isSelected);

		return selected;
	}

	public static filteredByCategories(
		products: UserProductType[],
		categories: IFilterOptions[]
	) {
		return products.filter((product: any) =>
			product.categories.includes(...categories.map(({ content }) => content))
		);
	}

	public static filteredByRating(
		rate: IFilterOptions[],
		products: UserProductType[]
	) {
		return products.filter(product =>
			rate.map(r => product.rate === Number(r.content.toString().split(" ")[0]))
		);
	}
}
