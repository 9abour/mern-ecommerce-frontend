import getUser from "@/helpers/getUser";
import { isAuthorizedForDashboard } from "@/helpers/isAuthorizedForDashboard";
import { NextRequest, NextResponse } from "next/server";

/**
 * Configuration object for the middleware.
 *
 * @type {Object}
 * @property {string[]} matcher - An array of regular expressions to match protected paths.
 */

export const config = {
	matcher: ["/((?!api|.*\\..*).*)"],
};

/**
 * An array of protected paths that require user authentication.
 *
 * @type {string[]}
 */
const protectedPaths = ["/auth"];

export default async function handleAuthenticationMiddleware(req: NextRequest) {
	const accessToken = req.cookies.get("accessToken")?.value;
	const refreshToken = req.cookies.get("refreshToken")?.value;

	/**
	 * User object obtained by fetching user information using the access token.
	 *
	 * @type {Object}
	 */
	const user = await getUser(accessToken);

	/**
	 * Checks if the current request path is protected.
	 *
	 * @type {boolean}
	 */

	const isProtectedPath = protectedPaths.some(route =>
		req.nextUrl.pathname.startsWith(route)
	);

	if (user && !isProtectedPath) {
		return NextResponse.next();
	}

	if (user && isProtectedPath) {
		return NextResponse.redirect(new URL("/", req.nextUrl));
	}

	if (!user && !isProtectedPath && !refreshToken) {
		return NextResponse.redirect(new URL("/auth/signin", req.url));
	}

	if (user && isAuthorizedForDashboard(user)) {
		return NextResponse.redirect(new URL("/", req.nextUrl));
	}
}
