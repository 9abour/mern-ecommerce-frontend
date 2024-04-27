import useFormValidation from "@/components/common-layout/form/hooks/useFormValidation";
import ColorPicker from "@/components/common/form/ColorPicker";
import Form from "@/components/common/form/Form";
import useColorPicker from "@/components/common/form/hooks/useColorPicker";
import useHandleFormInputChange from "@/components/common/form/hooks/useHandleFormInputChange";
import UploadImage from "@/components/dashboard/components/UploadImage";
import { defaultCreateCategoryInputs } from "@/components/dashboard/data/createCategoryFormData";
import { useUploadImage } from "@/components/dashboard/hooks/useUploadImage";
import createCategoryMutation from "@/components/dashboard/mutations/createCategory";
import generateZodSchema from "@/helpers/zod/generateZodSchema";
import React, { FormEvent } from "react";
import { useMutation } from "react-query";
import { toast } from "sonner";

const CreateCategory = () => {
	const { formValues, onFormValueChange } = useHandleFormInputChange();
	const schema = generateZodSchema(defaultCreateCategoryInputs);

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

	const { color, changeColor, hideColorInput, isColorInputOpen } =
		useColorPicker("#000");

	const mutation = useMutation(
		() =>
			createCategoryMutation({
				name: formValues.categoryName,
				color,
				imageUrl,
			}),
		{
			onSuccess: ({ data }) => {
				const { msg } = data;
				handleChangeSelectedImage(null);
				toast.success(msg);
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
				title="Create Category"
				submitText="Create"
				inputs={defaultCreateCategoryInputs}
				submitFunc={handleSubmit}
				onFormValueChange={onFormValueChange}
				validationErrors={validationErrors}
			>
				<UploadImage
					selectedImage={selectedImage}
					handleChangeSelectedImage={handleChangeSelectedImage}
					handleChangeImageUrl={handleChangeImageUrl}
					imageValidationError={imageValidationError}
					imageUrl={imageUrl}
				/>

				<ColorPicker
					{...{ color, changeColor, hideColorInput, isColorInputOpen }}
				/>
			</Form>
		</div>
	);
};

export default CreateCategory;
