import { IFilterOption } from "../types";

export class FiltersHelper {
	public static selectOption(
		id: number,
		list: IFilterOption[]
	): IFilterOption[] {
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
