"use client";

import { ChildrenType } from "@/types/index.types";
import React from "react";

const JoinLayout = ({ children }: ChildrenType) => {
	return (
		<div className="w-screen h-screen grid place-items-center">{children}</div>
	);
};

export default JoinLayout;
