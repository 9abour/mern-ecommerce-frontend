import { serialize } from "cookie";

export const POST = async () => {
	const serialized = serialize("accessToken", "", {
		httpOnly: true,
		secure: process.env.NEXT_PUBLIC_NODE_ENV === "production",
		sameSite: true,
		maxAge: -1,
		path: "/",
	});

	const response = {
		message: "Signed off",
	};

	return new Response(JSON.stringify(response), {
		headers: { "Set-Cookie": serialized },
		status: 200,
	});
};
