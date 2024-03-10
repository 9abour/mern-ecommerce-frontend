import React, { ChangeEvent } from "react";
import { RiImageAddLine, RiImageEditFill } from "react-icons/ri";

type IProductProps = {
	selectedImage: File | null;
	setSelectedImage: (event: File) => void;
};

const ProductImage = ({ selectedImage, setSelectedImage }: IProductProps) => {
	// Function to handle file selection
	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			setSelectedImage(file);
		}
	};

	return (
		<div className="bg-gray-100 p-2 border rounded-full">
			<input
				type="file"
				accept="image/*"
				onChange={handleFileChange}
				id="image-upload"
				className="hidden"
			/>

			<label
				htmlFor="image-upload"
				className="w-fit flex items-center gap-2 cursor-pointer"
			>
				{selectedImage ? (
					<>
						<RiImageEditFill size={40} />
						<p>{selectedImage.name}</p>
					</>
				) : (
					<>
						<RiImageAddLine size={40} />
						<p>Select Image</p>
					</>
				)}
			</label>
		</div>
	);
};

export default ProductImage;
