import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const protectedRoutes = ["/signin", "/signup"];

export default async function middleware(req: NextRequest) {
	const token = req.cookies.get("accessToken")?.value;

	if (token && protectedRoutes.includes(req.nextUrl.pathname)) {
		return NextResponse.redirect(new URL("/", req.url));
	} else if (!token && !protectedRoutes.includes(req.url)) {
		return NextResponse.redirect(new URL("/signin", req.url));
	}
}
