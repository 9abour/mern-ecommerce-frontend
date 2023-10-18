import { NextRequest, NextResponse } from "next/server";
export const config = {
	matcher: ["/((?!api|.*\\..*).*)"],
};

const protectedRoutes = ["/signin", "/signup"];

export default async function middleware(req: NextRequest) {
	const token = req.cookies.get("accessToken");

	if (token && protectedRoutes.includes(req.nextUrl.pathname)) {
		return NextResponse.redirect(new URL("/", req.nextUrl));
	} else if (!token && !protectedRoutes.includes(req.nextUrl.pathname)) {
		return NextResponse.redirect(new URL("/signin", req.url));
	}

	return NextResponse.next();
}
