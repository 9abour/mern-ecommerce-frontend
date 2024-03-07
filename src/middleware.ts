import getUser from "@/helpers/getUser";
import { NextRequest, NextResponse } from "next/server";
export const config = {
	matcher: ["/((?!api|.*\\..*).*)"],
};

const protectedRoutes = [
	"/signin",
	"/signup",
	"/send-reset-password",
	"/reset-password",
];

export default async function middleware(req: NextRequest) {
	const accessToken = req.cookies.get("accessToken")?.value;

	const user = await getUser(accessToken);

	if (user && protectedRoutes.includes(req.nextUrl.pathname)) {
		return NextResponse.redirect(new URL("/", req.nextUrl));
	} else if (!user && !protectedRoutes.includes(req.nextUrl.pathname)) {
		return NextResponse.redirect(new URL("/signin", req.url));
	}
	return NextResponse.next();
}
