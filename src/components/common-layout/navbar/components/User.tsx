import Image from "next/image";
import React, { useContext } from "react";
import userPic from "../../../../../public/user.jpeg";
import SignOff from "@/components/common/button/SignOff";
import UserContext from "@/context/UserContext";

const User = () => {
	const { user } = useContext(UserContext);

	return (
		<div className="max-w-[250px] min-w-[150px] h-[50px] flex items-center gap-1 bg-dark py-2 px-1 rounded-l-full">
			<Image
				src={user?.image_url ? user.image_url : userPic}
				width={40}
				height={40}
				alt="user-image"
				className="rounded-full object-cover"
			/>
			<SignOff />
		</div>
	);
};

export default User;
