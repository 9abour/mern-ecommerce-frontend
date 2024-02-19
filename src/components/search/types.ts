import { IFilters } from "../filters/index.types";

export interface IFiltersProps {
	filters: IFilters;
	setFilters: (filters: IFilters) => void;
}
