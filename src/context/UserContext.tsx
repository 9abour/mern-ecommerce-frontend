"use client";

import getUser from "@/helpers/getUser";
import { ChildrenType, UserType } from "@/types/index.types";
import { createContext, useEffect, useState } from "react";
import useAuthToken from "@/components/auth/hooks/useAuthToken";

interface UserProviderProps extends ChildrenType {
	initialUser: UserType | null;
}

const initialUserState: { user: UserType | null } = {
	user: null,
};

const UserContext = createContext(initialUserState);

const UserProvider = ({ children, initialUser }: UserProviderProps) => {
	const [currentUser, setCurrentUser] = useState<UserType | null>(initialUser);

	const { handleAuthTokenRefresh } = useAuthToken();

	useEffect(() => {
		(async () => {
			if (!initialUser) {
				const accessToken: string = await handleAuthTokenRefresh();

				const user = await getUser(accessToken);
				if (user) {
					setCurrentUser(user);
				}
			}
		})();
	}, []);

	return (
		<UserContext.Provider value={{ user: currentUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
export { UserProvider };
