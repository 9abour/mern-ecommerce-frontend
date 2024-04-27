export type ProductPropsType = {
	selectedImage: File | null;
	handleChangeSelectedImage: (event: File | null) => void;
	handleChangeImageUrl: (url: string) => void;
	imageValidationError: string;
	imageUrl: string;
};
