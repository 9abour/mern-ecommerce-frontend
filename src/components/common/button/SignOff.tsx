"use client";

import React from "react";
import TextButton from "./TextButton";
import useLogout from "@/components/common-layout/form/hooks/useLogout";

const SignOff = () => {
	const { logout } = useLogout();

	return (
		<TextButton
			onclick={logout}
			text="Sign Off"
			customStyles="block mx-auto uppercase text-sm bg-secondaryDark text-gray-200 hover:shadow-md hover:bg-white hover:text-dark transition duration-500"
		/>
	);
};

export default SignOff;
