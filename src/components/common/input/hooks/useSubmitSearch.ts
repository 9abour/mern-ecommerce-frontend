import { FormEvent } from "react";
import { ISubmitSearchHookProps } from "../types";
import { useRouter } from "next/navigation";

export const useSubmitSearch = ({
	searchProps,
	setFormIsActive,
	resetSearch,
}: ISubmitSearchHookProps) => {
	const { push } = useRouter();

	const handleOnSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (searchProps) {
			push(`/search/p=${searchProps}`);
			setFormIsActive(false);

			resetSearch();
		}
	};

	return {
		submit: handleOnSubmit,
	};
};
