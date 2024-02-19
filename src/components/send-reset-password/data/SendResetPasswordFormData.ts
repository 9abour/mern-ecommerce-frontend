import {
	IFormLinks,
	IHandleFormSubmit,
} from "@/components/common/form/types/index.types";
import { IFormInput } from "@/components/common/input/types";

export const sendResetPasswordFormInputsData: IFormInput[] = [
	{
		name: "email",
		type: "email",
		placeholder: "Email",
		required: true,
		autoFocus: true,
	},
];

export const sendResetPasswordFormIHandleSubmitData: IHandleFormSubmit = {
	text: "Send Reset Password",
	submitFunc: () => {},
};

export const sendResetPasswordFormILinksData: IFormLinks[] = [
	{
		text: `Don't have an account? `,
		link: {
			href: "/signup",
			text: "Sign Up",
		},
	},
	{
		text: `Already have an account? `,
		link: {
			href: "/signin",
			text: "Sign In",
		},
	},
];
