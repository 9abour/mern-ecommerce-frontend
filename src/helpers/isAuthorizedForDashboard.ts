import { UserType } from "@/types/index.types";

function isAuthorizedForDashboard(user: UserType) {
	return user && user.role === "admin";
}

export { isAuthorizedForDashboard };
