"use client";

import React from "react";
import TextButton from "./TextButton";

const SignOff = () => {
	return (
		<TextButton
			text="Sign Off"
			customStyles="block mx-auto uppercase text-sm bg-secondaryDark text-gray-200 hover:shadow-md hover:bg-white hover:text-dark transition duration-500"
		/>
	);
};

export default SignOff;
