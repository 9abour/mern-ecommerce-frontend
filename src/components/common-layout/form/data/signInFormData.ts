import { IFormLinks } from "@/components/common/form/types/index.types";
import { IFormInput } from "@/components/common/input/types";

export const singInFormInputsData: IFormInput[] = [
	{
		name: "email",
		type: "email",
		placeholder: "Email",
		required: true,
		autoFocus: true,
		containerStyles: "col-span-4",
	},
	{
		name: "password",
		type: "password",
		placeholder: "Password",
		required: true,
		containerStyles: "col-span-4",
	},
];

export const singInFormSubmitText: string = "Sign In";

export const singInFormILinksData: IFormLinks[] = [
	{
		text: `Don't have an account? `,
		link: {
			href: "/auth/signup",
			text: "Sign Up",
		},
	},
	{
		text: `Forgot password? `,
		link: {
			href: "/auth/send-reset-password",
			text: "Reset",
		},
	},
];
