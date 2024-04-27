import { useState } from "react";
import { UserProductTypeFormInputs } from "@/components/dashboard/types/productForm.types";
import { defaultProductInputs } from "@/components/dashboard/data/createProductFormData";

const useCreateProduct = () => {
	const [productInputs, setProductInputs] =
		useState<UserProductTypeFormInputs>(defaultProductInputs);

	const handleChangeInput = (
		name: string,
		value: string,
		productInputs: UserProductTypeFormInputs
	) => {
		const updated: UserProductTypeFormInputs = productInputs.map(inputInfo => {
			if (inputInfo.name == name) {
				return {
					...inputInfo,
					value,
				};
			} else {
				return inputInfo;
			}
		});

		setProductInputs(updated);
	};

	return {
		productInputs,
		handleChangeInput,
	};
};

export default useCreateProduct;
