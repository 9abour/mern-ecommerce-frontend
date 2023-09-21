import Image from "next/image";
import React from "react";
import LogoImage from "../../../../public/logo.png";
import { PiBowlFoodFill } from "react-icons/pi";
import Link from "next/link";

const Logo = () => {
	return (
		<div className="min-w-[200px] flex justify-center text-primary">
			<Link href={"/"}>
				<PiBowlFoodFill size={50} />
			</Link>
		</div>
	);
};

export default Logo;
