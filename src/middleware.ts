import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
	matcher: ["/"],
};

const protectedRoutes = ["/signin", "/signup"];

export default async function middleware(req: NextRequest) {
	const token = req.cookies.get("accessToken")?.value;

	console.log(req.nextUrl);

	if (token && protectedRoutes.includes(req.nextUrl.pathname)) {
		return NextResponse.redirect(new URL("/", req.url));
	} else if (!token && !protectedRoutes.includes(req.url)) {
		return NextResponse.redirect(new URL("/signin", req.url));
	}
}
