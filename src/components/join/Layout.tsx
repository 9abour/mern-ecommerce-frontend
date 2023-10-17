"use client";

import React from "react";
import SignIn from "../sign-in/components/SignIn";
import SignUp from "../sign-up/components/SignUp";

const JoinLayout = () => {
	const pathname = window.location.pathname.split("/")[1];
	return (
		<div className="w-screen h-screen grid place-items-center">
			{pathname === "signin" ? <SignIn /> : <SignUp />}
		</div>
	);
};

export default JoinLayout;
