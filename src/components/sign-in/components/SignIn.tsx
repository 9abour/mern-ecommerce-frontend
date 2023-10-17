"use client";

import TextButton from "@/components/common/button/TextButton";
import FormInput from "@/components/common/input/FormInput";
import axios from "axios";
import React, { FormEvent } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignIn = () => {
	const { push } = useRouter();
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const credentials = {
			username: e.currentTarget.username.value,
			password: e.currentTarget.password.value,
		};

		try {
			const { data } = await axios.post("/api/auth/signin", credentials);

			console.log(JSON.stringify(data));
			toast.success("Authorized");
			push("./");
		} catch (error) {
			toast.error("Unauthorized");
			console.log(e);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full max-w-[400px] flex flex-col gap-2"
		>
			<h1 className="font-bold text-5xl mb-4">Welcome Back</h1>

			<FormInput type="text" name="username" placeholder="Username" required />
			<FormInput
				type="password"
				name="password"
				placeholder="Password"
				required
			/>
			<TextButton
				text="Sign In"
				customStyles="mt-2 font-semibold text-xl bg-primary"
			/>

			<div>
				<p>
					Don't have an account? <a href="/signup">Sign Up</a>
				</p>
			</div>
		</form>
	);
};

export default SignIn;
