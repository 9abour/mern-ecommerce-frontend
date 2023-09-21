import Image from "next/image";
import React from "react";
import userPic from "../../../../public/user.jpeg";
import SignOff from "@/components/common/buttons/SignOff";

const User = () => {
	return (
		<div className="max-w-[250px] min-w-[150px] h-[50px] flex items-center gap-1 bg-dark py-2 px-1 rounded-l-full">
			<Image
				src={userPic}
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
