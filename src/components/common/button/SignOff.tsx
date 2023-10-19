"use client";

import React from "react";
import TextButton from "./TextButton";
import axios from "axios";
import { toast } from "sonner";

const SignOff = () => {
	const signOff = async () => {
		try {
			await axios.post("/api/auth/signoff");
			window.location.reload();
			toast.success("Signed Off");
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<TextButton
			text="Sign Off"
			customStyles="block mx-auto uppercase text-sm bg-secondaryDark text-gray-200 hover:shadow-md hover:bg-white hover:text-dark transition duration-500"
			onclick={() => signOff()}
		/>
	);
};

export default SignOff;
