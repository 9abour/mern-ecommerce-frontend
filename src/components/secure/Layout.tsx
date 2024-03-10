"use client";

import React, { ReactNode, lazy, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { UserType } from "@/types/index.types";
import Loader from "@/components/common/loading/Loader";
import useRefreshToken from "@/components/auth/hooks/useRefreshToken";
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

const DashboardLayout = ({
	children,
	user,
}: {
	children: ReactNode;
	user: UserType | null;
}) => {
	const [isLoading, setIsLoading] = useState(true);
	const pathname = usePathname();

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
			<Navbar user={user} />
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
