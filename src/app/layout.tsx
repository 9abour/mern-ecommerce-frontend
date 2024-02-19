import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "rsuite/dist/rsuite.min.css";
import { Outfit } from "next/font/google";
import { ReduxProvider } from "@/rtk/Provider";
import { lazy } from "react";
import { Metadata } from "next";
import { Toaster } from "sonner";
import QueryProvider from "@/providers/QueryClientProvider";
const DashboardLayout = lazy(() => import("@/components/secure/Layout"));


const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "E-commerce",
	description: "E-commerce app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<QueryProvider>
					<Toaster richColors position="bottom-left" />
					<ReduxProvider>
						<DashboardLayout>{children}</DashboardLayout>
					</ReduxProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
