"use client";

import { ChildrenType } from "@/types/index.types";
import { QueryClient, QueryClientProvider } from "react-query";

const QueryProvider = ({ children }: ChildrenType) => {
	const client = new QueryClient();

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
