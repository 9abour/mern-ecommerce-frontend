import TextButton from "@/components/common/button/TextButton";
import FormInput from "@/components/common/input/FormInput";
import React from "react";

const SignUp = () => {
	return (
		<form className="w-full max-w-[400px] flex flex-col gap-2">
			<h1 className="font-bold text-5xl mb-4">Create Account</h1>

			<FormInput type="text" name="username" placeholder="Username" required />
			<FormInput type="password" placeholder="Password" required />
			<FormInput type="password" placeholder="Confirm Password" required />
			<TextButton
				text="Sign Up"
				customStyles="mt-2 font-semibold text-xl bg-primary"
			/>

			<div>
				<p>
					Already have an account? <a href="/signin">Sign In</a>
				</p>
			</div>
		</form>
	);
};

export default SignUp;
