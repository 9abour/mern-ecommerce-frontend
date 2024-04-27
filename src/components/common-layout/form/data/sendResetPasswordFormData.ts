import { IFormLinks } from "@/components/common/form/types/index.types";
import { IFormInput } from "@/components/common/input/types";

export const sendResetPasswordFormInputsData: IFormInput[] = [
	{
		name: "email",
		type: "email",
		placeholder: "Email",
		required: true,
		autoFocus: true,
		containerStyles: "col-span-4",
	},
];

export const sendResetPasswordFormSubmitText: string = "Send Reset Password";

export const sendResetPasswordFormILinksData: IFormLinks[] = [
	{
		text: `Don't have an account? `,
		link: {
			href: "/auth/signup",
			text: "Sign Up",
		},
	},
	{
		text: `Already have an account? `,
		link: {
			href: "/auth/signin",
			text: "Sign In",
		},
	},
];
