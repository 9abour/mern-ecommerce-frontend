"use client";

import { store } from "@/rtk/store/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
	return <Provider store={store}>{children}</Provider>;
};
