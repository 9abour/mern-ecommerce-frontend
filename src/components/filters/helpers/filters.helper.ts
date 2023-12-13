import { IProduct } from "@/components/products/types";
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
		return products.filter(product =>
			rate.map(r => product.rate === Number(r.content.toString().split(" ")[0]))
		);
	}
}
