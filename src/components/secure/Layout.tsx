"use client";

import React, { lazy, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChildrenType } from "@/types/index.types";
import Loader from "@/components/common/loading/Loader";
import useRefreshToken from "@/components/auth/hooks/useRefreshToken";
import UserContext from "@/context/UserContext";
const Navbar = lazy(
	() => import("@/components/common-layout/navbar/components/Navbar")
);
const Aside = lazy(
	() => import("@/components/common-layout/aside/components/Aside")
);
const Basket = lazy(
	() => import("@/components/purchase-management/basket/components/Basket")
);
const Footer = lazy(
	() => import("@/components/common-layout/footer/components/Footer")
);
const JoinLayout = lazy(() => import("@/components/join/Layout"));

const DashboardLayout = ({ children }: ChildrenType) => {
	const [isLoading, setIsLoading] = useState(true);
	const pathname = usePathname();
	const { user } = useContext(UserContext);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, [pathname]);

	useRefreshToken(user);

	return isLoading ? (
		<Loader />
	) : user ? (
		<>
			<Navbar />
			<div className="flex pt-[70px]">
				<Aside />
				<div className="w-full md:w-[calc(100%-248px)] md:ml-[224px] md:mr-[24px] mt-[5rem] flex flex-col justify-between h-[calc(100vh-150px)]">
					<main>
						<Basket />
						{children}
					</main>
					<Footer />
				</div>
			</div>
		</>
	) : (
		<JoinLayout>{children}</JoinLayout>
	);
};

export default DashboardLayout;
