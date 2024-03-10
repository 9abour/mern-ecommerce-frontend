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

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "E-commerce",
	description: "E-commerce app",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookieStore = cookies();
	const accessToken = cookieStore.get("accessToken")?.value;

	const user = await getUser(accessToken);

	return (
		<html lang="en">
			<body className={inter.className}>
				<QueryProvider>
					<Toaster richColors position="bottom-left" />
					<ReduxProvider>
						<UserProvider user={user}>
							<DashboardLayout>{children}</DashboardLayout>
						</UserProvider>
					</ReduxProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
