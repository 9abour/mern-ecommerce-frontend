import { IFormLinks } from "@/components/common/form/types/index.types";
import { IFormInput } from "@/components/common/input/types";

export const resetPasswordFormInputsData: IFormInput[] = [
	{
		name: "newPassword",
		type: "password",
		placeholder: "New password",
		required: true,
		autoFocus: true,
		containerStyles: "col-span-4",
	},
	{
		name: "confirmNewPassword",
		type: "password",
		placeholder: "Confirm new password",
		required: true,
		containerStyles: "col-span-4",
	},
];

export const resetPasswordFormSubmitText: string = "Reset Password";

export const resetPasswordFormData: IFormLinks[] = [
	{
		text: `Do you remember your password? `,
		link: {
			href: "/auth/signin",
			text: "Sign In",
		},
	},
];
