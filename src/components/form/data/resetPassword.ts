import { IFormLinks } from "@/components/common/form/types/index.types";
import { IFormInput } from "@/components/common/input/types";

export const resetPasswordFormInputsData: IFormInput[] = [
	{
		name: "newPassword",
		type: "password",
		placeholder: "New password",
		required: true,
		autoFocus: true,
	},
	{
		name: "confirmNewPassword",
		type: "password",
		placeholder: "Confirm new password",
		required: true,
	},
];

export const resetPasswordFormSubmitText: string = "Reset Password";

export const resetPasswordFormData: IFormLinks[] = [
	{
		text: `Do you remember your password? `,
		link: {
			href: "/signin",
			text: "Sign In",
		},
	},
];
