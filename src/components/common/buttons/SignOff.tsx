import React from "react";
import ButtonText from "./ButtonText";

const SignOff = () => {
	return (
		<ButtonText
			text="Sign Off"
			bgColor="bg-secondaryDark"
			customStyles="block mx-auto uppercase text-sm text-gray-200 hover:shadow-md hover:bg-white hover:text-dark transition duration-500"
		/>
	);
};

export default SignOff;
