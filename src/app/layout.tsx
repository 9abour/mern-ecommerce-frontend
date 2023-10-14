import Aside from "@/components/aside/components/Aside";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "rsuite/dist/rsuite.min.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { lazy } from "react";
import Footer from "@/components/footer/components/Footer";
import { ReduxProvider } from "@/rtk/Provider";
import { Toaster } from "sonner";
const Navbar = lazy(() => import("@/components/navbar/components/Navbar"));

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ecommerce",
	description: "Ecommerce app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ReduxProvider>
					<Toaster richColors />
					<Navbar />
					<div className="flex pt-[70px]">
						<Aside />
						<div className="w-full md:w-[calc(100%-248px)] md:ml-[224px] md:mr-[24px] mt-[5rem] flex flex-col justify-between h-[calc(100vh-150px)]">
							<main>{children}</main>
							<Footer />
						</div>
					</div>
				</ReduxProvider>
			</body>
		</html>
	);
}
