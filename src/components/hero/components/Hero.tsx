import React from "react";
import TextInfo from "./TextInfo";
import Image from "next/image";
import burger from "../../../../public/burger.png";
import ButtonIcon from "@/components/common/buttons/ButtonIcon";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Hero = () => {
	return (
		<section className="relative w-full ml-auto md:w-[calc(100%+24px)] h-[45rem] sm:h-[35rem] mt-[-86px] bg-gradient-to-l from-primary to-[#32a771] md:rounded-bl-[45px] pt-[70px] sm:pl-16 flex flex-col-reverse sm:flex-row justify-center items-center">
			<TextInfo />
			<Image
				src={burger}
				width={400}
				height={400}
				alt=""
				className="w-full sm:w-3/6 md:w-4/6 max-w-[500px]"
			/>

			<div className="absolute right-0 bottom-0 flex gap-2 m-8">
				<ButtonIcon
					icon={<BsArrowLeftShort size={25} />}
					customStyles="border-2 border-dark hover:!bg-dark hover:text-white text-dark"
				/>

				<ButtonIcon
					icon={<BsArrowRightShort size={25} />}
					customStyles="border-2 border-dark !bg-dark text-white"
				/>
			</div>
		</section>
	);
};

export default Hero;
