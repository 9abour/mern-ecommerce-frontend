import TextButton from "@/components/common/button/TextButton";
import FormInput from "@/components/common/input/FormInput";
import Link from "next/link";
import React from "react";

const SignUp = () => {
	return (
		<form className="w-full max-w-[400px] flex flex-col gap-2">
			<h1 className="font-bold text-5xl mb-4">Create Account</h1>

			<FormInput
				type="email"
				name="email"
				placeholder="Email"
				required
				autoFocus={true}
			/>
			<FormInput type="password" placeholder="Password" required />
			<FormInput type="password" placeholder="Confirm Password" required />
			<TextButton
				text="Sign Up"
				customStyles="mt-2 font-semibold text-xl bg-primary"
			/>
			<TextButton
				text="Sign Up with Google"
				customStyles="mt-2 font-semibold text-xl bg-[#4285F4a3] hover:bg-[#4285F4] text-white"
			/>

			<div>
				<p>
					Already have an account?{" "}
					<Link href="/signin" className="!font-semibold !text-blue-600">
						Sign In
					</Link>
				</p>
			</div>
		</form>
	);
};

export default SignUp;
