import React from "react";
import { IForm } from "./types/index.types";
import FormInput from "../input/FormInput";
import TextButton from "../button/TextButton";
import Link from "next/link";

const Form = ({
	title,
	inputs,
	handleSubmit,
	links,
	onFormValueChange,
}: IForm) => {
	return (
		<form className="w-full max-w-[600px] flex flex-col gap-2">
			<h1 className="font-bold text-5xl mb-4">{title}</h1>

			{inputs.map(input => (
				<FormInput
					key={input.name}
					type={input.type}
					name={input.name}
					placeholder={input.placeholder}
					required={input.required}
					autoFocus={input.autoFocus}
					handleChangeValue={onFormValueChange}
				/>
			))}

			<TextButton
				text={handleSubmit.text}
				onclick={handleSubmit.submitFunc}
				customStyles="mt-2 font-semibold text-xl bg-primary"
			/>

			<ul>
				{links.map(link => (
					<li key={link.text} className="mt-2">
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
		</form>
	);
};

export default Form;
