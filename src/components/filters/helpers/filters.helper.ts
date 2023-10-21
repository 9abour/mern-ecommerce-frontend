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
}
