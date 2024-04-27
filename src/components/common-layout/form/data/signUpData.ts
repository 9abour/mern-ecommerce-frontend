import { IFormLinks } from "@/components/common/form/types/index.types";
import { IFormInput } from "@/components/common/input/types";

export const signUpFormInputsData: IFormInput[] = [
	{
		name: "firstName",
		type: "text",
		placeholder: "First Name",
		required: true,
		autoFocus: true,
		containerStyles: "col-span-2",
	},
	{
		name: "lastName",
		type: "text",
		placeholder: "Last Name",
		required: true,
		containerStyles: "col-span-2",
	},
	{
		name: "email",
		type: "email",
		placeholder: "Email",
		required: true,
		containerStyles: "col-span-4",
	},
	{
		name: "password",
		type: "password",
		placeholder: "Password",
		required: true,
		min: 8,
		containerStyles: "col-span-4",
	},
	{
		name: "confirmPassword",
		type: "password",
		placeholder: "Confirm Password",
		required: true,
		min: 8,
		containerStyles: "col-span-4",
	},
];

export const signUpFormISubmitText: string = "Sign Up";

export const signUpFormILinksData: IFormLinks[] = [
	{
		text: `Already have an account? `,
		link: {
			href: "/auth/signin",
			text: "Sign In",
		},
	},
];
