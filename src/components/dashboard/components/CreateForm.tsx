"use client";

import React from "react";
import { usePathname } from "next/navigation";
import CreateCategory from "@/components/dashboard/components/CreateCategory";
import CreateProduct from "@/components/dashboard/components/product/CreateProduct";

const CreateForm = () => {
	const currentPathname = usePathname().split("/");
	const lastDirectory = currentPathname[currentPathname.length - 1];

	if (lastDirectory == "category") {
		return <CreateCategory />;
	}

	return <CreateProduct />;
};

export default CreateForm;
