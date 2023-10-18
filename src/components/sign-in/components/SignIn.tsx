"use client";

import TextButton from "@/components/common/button/TextButton";
import FormInput from "@/components/common/input/FormInput";
import axios from "axios";
import React, { FormEvent } from "react";
import { toast } from "sonner";
import Link from "next/link";

const SignIn = () => {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const credentials = {
			username: e.currentTarget.username.value,
			password: e.currentTarget.password.value,
		};

		try {
			const { data } = await axios.post("/api/auth/signin", credentials);

			toast.success("Authorized");
			window.location.pathname = "/";
		} catch (error) {
			toast.error("Unauthorized");
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

			<p>
				Don&apos;t have an account?{" "}
				<Link href="/signup" className="!font-semibold !text-blue-600">
					Sign Up
				</Link>
			</p>
		</form>
	);
};

export default SignIn;
