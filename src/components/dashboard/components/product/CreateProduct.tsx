import UploadImage from "@/components/dashboard/components/UploadImage";
import SelectProductCategories from "@/components/dashboard/components/product/SelectProductCategories";
import React, { FormEvent } from "react";
import { useUploadImage } from "@/components/dashboard/hooks/useUploadImage";
import { useMutation } from "react-query";
import { toast } from "sonner";
import createProductMutation from "@/components/dashboard/mutations/createProduct";
import Form from "@/components/common/form/Form";
import { defaultProductInputs } from "@/components/dashboard/data/createProductFormData";
import useHandleFormInputChange from "@/components/common/form/hooks/useHandleFormInputChange";
import generateZodSchema from "@/helpers/zod/generateZodSchema";
import useFormValidation from "@/components/common-layout/form/hooks/useFormValidation";
import { useAppSelector } from "@/rtk/store/store";

const CreateProduct = () => {
	const { formValues, onFormValueChange } = useHandleFormInputChange();
	const schema = generateZodSchema(defaultProductInputs);
	const { validationErrors, checkFormValidation } = useFormValidation(
		schema,
		formValues
	);
	const {
		selectedImage,
		imageUrl,
		imageValidationError,
		handleChangeSelectedImage,
		handleChangeImageUrl,
		handleChangeImageValidationError,
	} = useUploadImage();

	const { selectedCategoriesIds } = useAppSelector(
		state => state.selectProductCategoriesSlice
	);

	const mutation = useMutation(
		() =>
			createProductMutation({
				...formValues,
				categories: selectedCategoriesIds,
				imageUrl,
			}),
		{
			onSuccess: ({ data }) => {
				const { msg } = data;

				toast.success(msg);
			},
			onError: ({ response }) => {
				const { data } = response;
				const { errors } = data;

				errors.map((error: string) => {
					toast.error(error);
				});
			},
		}
	);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (!(await checkFormValidation())) {
			if (!selectedImage) {
				handleChangeImageValidationError("There is no selected image");
				return;
			}
			return;
		}

		mutation.mutate();
	};

	return (
		<div className="w-full max-w-[600px] mx-auto">
			<Form
				title="Create Product"
				submitText="Create"
				inputs={defaultProductInputs}
				submitFunc={handleSubmit}
				onFormValueChange={onFormValueChange}
				validationErrors={validationErrors}
			>
				<SelectProductCategories />

				<UploadImage
					selectedImage={selectedImage}
					handleChangeSelectedImage={handleChangeSelectedImage}
					handleChangeImageUrl={handleChangeImageUrl}
					imageValidationError={imageValidationError}
					imageUrl={imageUrl}
				/>
			</Form>
		</div>
	);
};

export default CreateProduct;
