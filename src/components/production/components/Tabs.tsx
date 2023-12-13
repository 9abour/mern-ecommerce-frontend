import React from "react";
import { ITabsProps } from "../index.types";
import TextButton from "../../common/button/TextButton";

const Tabs = ({ list, isActive, setIsActive }: ITabsProps) => {
	return (
		<div className="flex flex-wrap gap-1">
			{list.map(tab => (
				<TextButton
					key={tab.name}
					text={tab.name}
					customStyles={`${
						isActive.name === tab.name ? "!bg-dark !text-white" : ""
					} !py-2 !px-0 bg-gray-200 hover:bg-secondaryDark uppercase w-[80px] sm:w-[100px] text-[10px] sm:text-xs !text-dark hover:!text-gray-200 font-semibold`}
					onclick={() => setIsActive(tab)}
				/>
			))}
		</div>
	);
};

export default Tabs;
