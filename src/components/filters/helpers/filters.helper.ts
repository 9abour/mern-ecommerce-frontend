import { IProduct } from "@/components/products/types";
import { IFilterOptions } from "../types";

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
		products: IProduct[],
		categories: IFilterOptions[]
	) {
		return products.filter((product: any) =>
			product.categories.includes(...categories.map(({ content }) => content))
		);
	}

	public static filteredByAvailability(
		products: IProduct[],
		availability: IFilterOptions[]
	) {
		return products.filter(
			product => product.available === availability[0].isSelected
		);
	}

	public static filteredByRating(rate: IFilterOptions[], products: IProduct[]) {
		return rate.map((r: IFilterOptions) =>
			products.filter(
				product => product.rate === Number(r.content.toString().split(" ")[0])
			)
		);
	}
}
