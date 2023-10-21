import { IFilters } from "../filters/types";

export interface IFiltersProps {
	filters: IFilters;
	setFilters: (filters: IFilters) => void;
}
