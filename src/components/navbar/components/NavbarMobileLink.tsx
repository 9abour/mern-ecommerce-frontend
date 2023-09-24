import React from "react";
import Link from "next/link";
import { INavbarLink } from "../types";

const NavbarMobileLink = ({ href, name }: INavbarLink) => {
	return (
		<Link
			href={href}
			className="w-full block my-2 px-6 py-2 rounded-full text-white hover:bg-primary hover:text-dark transition border-b"
		>
			{name}
		</Link>
	);
};

export default NavbarMobileLink;
