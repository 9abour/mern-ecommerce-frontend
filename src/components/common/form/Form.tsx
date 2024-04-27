import React from "react";
import { IForm } from "./types/index.types";
import FormInput from "../input/FormInput";
import TextButton from "../button/TextButton";
import Link from "next/link";
import getZodErrorPath from "@/helpers/zod/getZodErrorPath";

const Form = ({
	title,
	inputs,
	submitText,
	submitFunc,
	links,
	isLoading,
	children,
	onFormValueChange,
	validationErrors,
}: IForm) => {
	return (
		<form
			className="w-full max-w-[600px] grid grid-cols-4 gap-2 mt-12"
			onSubmit={submitFunc}
		>
			<h1 className="col-span-4 font-bold text-5xl mb-4">{title}</h1>

			{inputs.map(input => (
				<FormInput
					key={input.name}
					{...input}
					handleChangeValue={onFormValueChange}
					validationError={getZodErrorPath(input.name, validationErrors)}
				/>
			))}

			{children}

			<TextButton
				type="submit"
				text={isLoading ? "Loading..." : submitText}
				customStyles="col-span-4 mt-2 font-semibold text-xl bg-primary"
			/>

			{links ? (
				<ul className="col-span-4">
					{links.map(link => (
						<li key={link.text} className={"mt-2"}>
							<p>
								{link.text}
								<Link
									href={link.link.href}
									className="!font-semibold !text-blue-600"
								>
									{link.link.text}
								</Link>
							</p>
						</li>
					))}
				</ul>
			) : null}
		</form>
	);
};

export default Form;
