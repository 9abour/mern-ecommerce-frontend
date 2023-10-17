"use client";

import React, { ReactNode } from "react";

const JoinLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="w-screen h-screen grid place-items-center">{children}</div>
	);
};

export default JoinLayout;
