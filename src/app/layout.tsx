import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "rsuite/dist/rsuite.min.css";
import { Outfit } from "next/font/google";
import { ReduxProvider } from "@/rtk/Provider";
import { Toaster } from "sonner";
import { lazy } from "react";
const DashboardLayout = lazy(() => import("@/components/dashboard/Layout"));

const inter = Outfit({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Toaster richColors />
				<ReduxProvider>
					<DashboardLayout>{children}</DashboardLayout>
				</ReduxProvider>
			</body>
		</html>
	);
}
