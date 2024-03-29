import getUser from "@/helpers/getUser";
import { NextRequest, NextResponse } from "next/server";
export const config = {
	matcher: ["/((?!api|.*\\..*).*)"],
};

const protectedRoutes = ["/auth"];

export default async function middleware(req: NextRequest) {
	const accessToken = req.cookies.get("accessToken")?.value;

	const user = await getUser(accessToken);

	const isProtectedRoute = protectedRoutes.some(route => {
		// Check if the request path starts with the protected route
		return req.nextUrl.pathname.startsWith(route);
	});

	if (user && isProtectedRoute) {
		return NextResponse.redirect(new URL("/", req.nextUrl));
	} else if (!user && !isProtectedRoute) {
		return NextResponse.redirect(new URL("/auth/signin", req.url));
	}
	return NextResponse.next();
}
