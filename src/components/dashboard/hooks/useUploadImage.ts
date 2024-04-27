import { useEffect, useState } from "react";

const useUploadImage = () => {
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const [imageUrl, setImageUrl] = useState<string>("");
	const [imageValidationError, setImageValidationError] = useState("");

	const handleChangeSelectedImage = (file: File | null) => {
		setSelectedImage(file);
	};
	const handleChangeImageUrl = (url: string) => {
		setImageUrl(url);
	};
	const handleChangeImageValidationError = (error: string) => {
		setImageValidationError(error);
	};

	useEffect(() => {
		if (selectedImage) {
			handleChangeImageValidationError("");
			return;
		}
	}, [selectedImage]);

	return {
		selectedImage,
		imageUrl,
		imageValidationError,
		handleChangeSelectedImage,
		handleChangeImageUrl,
		handleChangeImageValidationError,
	};
};

export { useUploadImage };
