import {
	IFormLinks,
	IHandleFormSubmit,
} from "@/components/common/form/types/index.types";
import { IFormInput } from "@/components/common/input/types";

export const signUpFormInputsData: IFormInput[] = [
	{
		name: "firstName",
		type: "text",
		placeholder: "First Name",
		required: true,
		autoFocus: true,
	},
	{
		name: "lastName",
		type: "text",
		placeholder: "Last Name",
		required: true,
	},
	{
		name: "email",
		type: "email",
		placeholder: "Email",
		required: true,
	},
	{
		name: "password",
		type: "password",
		placeholder: "Password",
		required: true,
	},
	{
		name: "confirmPassword",
		type: "password",
		placeholder: "Confirm Password",
		required: true,
	},
];

export const signUpFormIHandleSubmitData: IHandleFormSubmit = {
	text: "Sign Up",
	submitFunc: () => {},
};

export const signUpFormILinksData: IFormLinks[] = [
	{
		text: `Already have an account? `,
		link: {
			href: "/signin",
			text: "Sign In",
		},
	},
];
