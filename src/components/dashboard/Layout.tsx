"use client";

import React, { ReactNode, lazy, useEffect, useState } from "react";
import JoinLayout from "../join/Layout";
import { usePathname, useRouter } from "next/navigation";
import { getUser } from "@/helpers/getUser";
import Loader from "../common/loading/Loader";
const Navbar = lazy(() => import("../navbar/components/Navbar"));
const Aside = lazy(() => import("../aside/components/Aside"));
const Footer = lazy(() => import("../footer/components/Footer"));

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState();

	const pathname = usePathname().split("/");

	useEffect(() => {
		(async () => {
			const { user, error } = await getUser();

			if (user) {
				setUser(user);
			}

			if (user || error) {
				setIsLoading(false);
			}
		})();
	}, [pathname]);

	if (isLoading) {
		return <Loader />;
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
		<>
			<JoinLayout>{children}</JoinLayout>
		</>
	);
};

export default DashboardLayout;
