"use client";

import React, { useState } from "react";
import FormInput from "@/components/common/input/FormInput";
import TextButton from "@/components/common/button/TextButton";
import { usePathname } from "next/navigation";
import useCreateProduct from "@/components/dashboard/hooks/useCreateProduct";
import ProductImage from "@/components/dashboard/components/ProductImage";

const CreateForm = () => {
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const { productInputs, handleChangeInput } = useCreateProduct();
	const currentPathname = usePathname().split("/");
	const lastDirectory = currentPathname[currentPathname.length - 1];

	const handleSubmit = () => {
		console.log("submit");
	};

	// Create Category
	if (lastDirectory == "category") {
		return (
			<form
				className="w-full max-w-[600px] mx-auto flex flex-col gap-2 mt-24"
				onSubmit={handleSubmit}
			>
				<h1 className="font-bold text-3xl mb-4 capitalize">
					Create {lastDirectory}
				</h1>

				<FormInput
					type="text"
					name="name"
					placeholder={`Name of the ${lastDirectory}`}
					required
					autoFocus={true}
				/>

				<ProductImage
					selectedImage={selectedImage}
					setSelectedImage={setSelectedImage}
				/>

				<TextButton
					text="Create"
					customStyles="mt-2 font-semibold text-xl bg-primary"
					type="submit"
					onclick={handleSubmit}
				/>
			</form>
		);
	}

	// Create Product
	return (
		<form
			className="w-full max-w-[600px] mx-auto flex flex-col gap-2 mt-24"
			onSubmit={handleSubmit}
		>
			<h1 className="font-bold text-3xl mb-4 capitalize">
				Create {lastDirectory}
			</h1>

			<div className="grid grid-cols-2 gap-2">
				{productInputs.map(
					({
						name,
						type,
						placeholder,
						value,
						required,
						autoFocus,
						customStyles,
					}) =>
						type == "textarea" ? (
							<textarea
								key={name}
								className={customStyles}
								name={name}
								placeholder={placeholder}
								id={name}
								onChange={e =>
									handleChangeInput(name, e.target.value, productInputs)
								}
								value={value}
							/>
						) : (
							<input
								key={name}
								className={`w-full h-[50px] min-h-[50px] border shadow-cmd rounded-full px-4 justify-between gap-2 text-xl bg-white outline-none focus:border-primary ${customStyles}`}
								type={type}
								name={name}
								placeholder={placeholder}
								required={required}
								autoFocus={autoFocus}
								onChange={e =>
									handleChangeInput(name, e.target.value, productInputs)
								}
								value={value}
							/>
						)
				)}
			</div>

			<ProductImage
				selectedImage={selectedImage}
				setSelectedImage={setSelectedImage}
			/>

			<TextButton
				type="submit"
				text="Create"
				customStyles="mt-2 font-semibold text-xl bg-primary"
				onclick={handleSubmit}
			/>
		</form>
	);
};

export default CreateForm;
