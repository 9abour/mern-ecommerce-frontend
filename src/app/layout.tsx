import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "rsuite/dist/rsuite.min.css";
import { Outfit } from "next/font/google";
import { ReduxProvider } from "@/rtk/Provider";
import { Metadata } from "next";
import { Toaster } from "sonner";
import QueryProvider from "@/providers/QueryClientProvider";
import DashboardLayout from "@/components/secure/Layout";
import getUser from "@/helpers/getUser";
import { cookies } from "next/headers";
import { UserProvider } from "@/context/UserContext";
import DialogProvider from "@/context/dialog/DialogProvider";
import { ChildrenType } from "@/types/index.types";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "E-commerce",
	description: "E-commerce app",
};

export default async function RootLayout({ children }: ChildrenType) {
	const user = await getUser(
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDBhMDdiZTQzNTYyYmZhZDYzZTE2ZSIsImZpcnN0TmFtZSI6Ik1vaGFtZWQiLCJsYXN0TmFtZSI6IkFiZFNhYm91ciIsImVtYWlsIjoiOWFib3VyQGdtYWlsLmNvbSIsImltYWdlVXJsIjoiIiwid2lzaGxpc3QiOltdLCJjYXJ0IjpbXSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE3NDg3ODU0LCJleHAiOjE3MTc0ODk2NTR9.OBXnU-Ri6ZGGfTkLriC6LHuvxhgCy03-MdCAZQHODtQ"
	);

	return (
		<html lang="en">
			<body className={inter.className}>
				<DialogProvider>
					<QueryProvider>
						<Toaster richColors position="bottom-left" />
						<ReduxProvider>
							<UserProvider initialUser={user}>
								<DashboardLayout>{children}</DashboardLayout>
							</UserProvider>
						</ReduxProvider>
					</QueryProvider>
				</DialogProvider>
			</body>
		</html>
	);
}
