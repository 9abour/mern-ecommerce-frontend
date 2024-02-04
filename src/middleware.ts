import { NextRequest, NextResponse } from "next/server";
export const config = {
	matcher: ["/((?!api|.*\\..*).*)"],
};

const protectedRoutes = ["/signin", "/signup"];

export default async function middleware(req: NextRequest) {
	// const user = await getUser();
	// // console.log(user);
	// if (user && protectedRoutes.includes(req.nextUrl.pathname)) {
	// 	return NextResponse.redirect(new URL("/", req.nextUrl));
	// } else if (!user && !protectedRoutes.includes(req.nextUrl.pathname)) {
	// 	return NextResponse.redirect(new URL("/signin", req.url));
	// }
	// return NextResponse.next();
}
