import { useState } from "react";
import { IProductFormInputs } from "@/components/dashboard/types/productForm.types";
import { defaultProductInputs } from "@/components/dashboard/data/createProductFormData";

const useCreateProduct = () => {
	const [productInputs, setProductInputs] =
		useState<IProductFormInputs>(defaultProductInputs);

	const handleChangeInput = (
		name: string,
		value: string,
		productInputs: IProductFormInputs
	) => {
		const updated: IProductFormInputs = productInputs.map(inputInfo => {
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
