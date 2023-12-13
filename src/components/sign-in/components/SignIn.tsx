"use client";

import TextButton from "@/components/common/button/TextButton";
import FormInput from "@/components/common/input/FormInput";
import axios from "axios";
import React, { FormEvent } from "react";
import { toast } from "sonner";
import Link from "next/link";

const SignIn = () => {
	return (
		<form className="w-full max-w-[400px] flex flex-col gap-2">
			<h1 className="font-bold text-5xl mb-4">Welcome Back</h1>

			<FormInput
				type="text"
				name="username"
				placeholder="Username"
				required
				autoFocus={true}
			/>
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
			<TextButton
				type="button"
				text="Sign In with Google"
				customStyles="mt-2 font-semibold text-xl bg-[#4285F4a3] hover:bg-[#4285F4] text-white"
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
