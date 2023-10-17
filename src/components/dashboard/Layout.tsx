"use client";

import React, { ReactNode, useEffect, useState } from "react";
import JoinLayout from "../join/Layout";
import { usePathname, useRouter } from "next/navigation";
import { getUser } from "@/helpers/getUser";
import Navbar from "../navbar/components/Navbar";
import Aside from "../aside/components/Aside";
import Footer from "../footer/components/Footer";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState();
	const router = useRouter();
	const pathname = usePathname().split("/");

	useEffect(() => {
		(async () => {
			const { user, error } = await getUser();

			if (user) {
				setUser(user);
			}

			if (
				error &&
				!pathname[pathname.length - 1].includes("signin") &&
				!pathname[pathname.length - 1].includes("signup")
			) {
				router.push("/signin");
				return;
			}

			setIsLoading(false);
		})();
	}, [pathname]);

	if (isLoading) {
		return <h1>Loading</h1>;
	}

	return user ? (
		<>
			<Navbar />
			<div className="flex pt-[70px]">
				<Aside />
				<div className="w-full md:w-[calc(100%-248px)] md:ml-[224px] md:mr-[24px] mt-[5rem] flex flex-col justify-between h-[calc(100vh-150px)]">
					<main>{children}</main>
					<Footer />
				</div>
			</div>
		</>
	) : (
		<JoinLayout>{children}</JoinLayout>
	);
};

export default DashboardLayout;
