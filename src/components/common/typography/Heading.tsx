import React from "react";

const Heading = ({
	text,
	customStyles,
}: {
	text: string;
	customStyles?: string;
}) => {
	return (
		<h3
			className={`text-2xl text-dark mt-16 my-8 mx-[24px] md:mx-0 ${customStyles} font-normal`}
		>
			<b className="font-bold">{text.split(" ")[0]}</b> {text.split(" ")[1]}
		</h3>
	);
};

export default Heading;
