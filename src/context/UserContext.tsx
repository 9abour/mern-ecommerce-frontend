"use client";

import { UserType } from "@/types/index.types";
import { ReactNode, createContext } from "react";

type UserProviderPropsType = {
	user: UserType | null;
	children: ReactNode;
};

const initialState: { user: UserType | null } = {
	user: null,
};

const UserContext = createContext(initialState);

const UserProvider = ({ children, user }: UserProviderPropsType) => {
	const contextValue = { user };

	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	);
};

export default UserContext;
export { UserProvider };
