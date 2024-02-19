import {
	IFormLinks,
	IHandleFormSubmit,
} from "@/components/common/form/types/index.types";
import { IFormInput } from "@/components/common/input/types";

export const singInFormInputsData: IFormInput[] = [
	{
		name: "email",
		type: "email",
		placeholder: "Email",
		required: true,
		autoFocus: true,
	},
	{
		name: "password",
		type: "password",
		placeholder: "Password",
		required: true,
	},
];

export const singInFormIHandleSubmitData: IHandleFormSubmit = {
	text: "Sign In",
	submitFunc: () => {},
};

export const singInFormILinksData: IFormLinks[] = [
	{
		text: `Don&apos;t have an account? `,
		link: {
			href: "/signup",
			text: "Sign Up",
		},
	},
	{
		text: `Forgot password? `,
		link: {
			href: "/send-reset-password",
			text: "Reset",
		},
	},
];
