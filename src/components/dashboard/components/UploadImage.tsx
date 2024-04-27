import Spinner from "@/components/common/loading/Spinner";
import uploadImage from "@/components/dashboard/helpers/uploadImage";
import { ProductPropsType } from "@/components/dashboard/types/categoryForm.types";
import React, { ChangeEvent, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { RiImageAddLine, RiImageEditFill } from "react-icons/ri";

const UploadImage = ({
	selectedImage,
	handleChangeSelectedImage,
	handleChangeImageUrl,
	imageValidationError,
	imageUrl,
}: ProductPropsType) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			setIsLoading(true);
			handleChangeSelectedImage(file);
			const image_url = await uploadImage(file);
			handleChangeImageUrl(image_url);
			setIsLoading(false);
		}
	};

	return (
		<div className="w-full col-span-4">
			<div
				className={`px-4 py-1 border bg-gray-100 flex items-center ${
					imageValidationError ? "border-red-400 bg-red-100 text-red-600" : ""
				} rounded-full`}
			>
				<input
					type="file"
					accept="image/*"
					onChange={handleFileChange}
					id="image-upload"
					className="hidden"
				/>

				<label
					htmlFor="image-upload"
					className="w-full h-full flex items-center gap-2 cursor-pointer"
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

				{isLoading ? (
					<Spinner />
				) : imageUrl ? (
					<FaCheck size={24} className="text-green-500" />
				) : null}
			</div>
			{imageValidationError ? (
				<p className="text-red-400">{imageValidationError}</p>
			) : null}
		</div>
	);
};

export default UploadImage;
