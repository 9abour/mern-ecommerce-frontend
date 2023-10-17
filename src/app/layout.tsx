"use client";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "rsuite/dist/rsuite.min.css";
import { Outfit } from "next/font/google";
import { ReduxProvider } from "@/rtk/Provider";
import { Toaster } from "sonner";
import Aside from "@/components/aside/components/Aside";
import Footer from "@/components/footer/components/Footer";
import Navbar from "@/components/navbar/components/Navbar";
import { useEffect, useState } from "react";
import { useGetUser } from "@/hooks/useGetUser";
import { usePathname, useRouter } from "next/navigation";
import JoinLayout from "@/components/join/Layout";

const inter = Outfit({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState(null);
	const router = useRouter();
	const pathname = usePathname().split("/");

	useEffect(() => {
		(async () => {
			const { user, error } = await useGetUser();

			if (user) {
				setUser(user);
			}

			if (error || user) {
				setIsLoading(false);
			}

			if (
				error &&
				!pathname[pathname.length - 1].includes("signin") &&
				!pathname[pathname.length - 1].includes("signup")
			) {
				router.push("/signin");
			}
		})();
	}, []);

	return (
		<html lang="en">
			<body className={inter.className}>
				<Toaster richColors />
				{isLoading ? (
					<h3>loading...</h3>
				) : user ? (
					<ReduxProvider>
						<Navbar />
						<div className="flex pt-[70px]">
							<Aside />
							<div className="w-full md:w-[calc(100%-248px)] md:ml-[224px] md:mr-[24px] mt-[5rem] flex flex-col justify-between h-[calc(100vh-150px)]">
								<main>{children}</main>
								<Footer />
							</div>
						</div>
					</ReduxProvider>
				) : (
					<JoinLayout />
				)}
			</body>
		</html>
	);
}
