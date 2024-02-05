import React from "react";
import Link from "next/link";
import { INavbarLink } from "../../index.types";

const NavbarMobileLink = ({ href, name }: INavbarLink) => {
	return (
		<li>
			<Link
				href={href}
				className="w-full block my-2 px-6 py-2 rounded-full text-white hover:bg-primary hover:text-dark transition border-b active:text-blue-400 focus:text-blue-400"
			>
				{name}
			</Link>
		</li>
	);
};

export default NavbarMobileLink;
