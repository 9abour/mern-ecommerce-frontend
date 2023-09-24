import React from "react";
import { ITabs } from "./types";
import ButtonText from "../common/buttons/ButtonText";

const Tabs = ({ list }: { list: ITabs }) => {
	return (
		<div>
			{list.map(tab => (
				<ButtonText
					key={tab.name}
					text={tab.name}
					customStyles="bg-gray-200 hover:bg-secondaryDark uppercase ml-3 w-[100px] text-xs !text-dark hover:!text-gray-200 font-semibold"
				/>
			))}
		</div>
	);
};

export default Tabs;
