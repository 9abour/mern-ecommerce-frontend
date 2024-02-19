import React from "react";
import { FaBowlFood } from "react-icons/fa6";
import ListItem from "./ListItem";
import LineBottom from "../../common/line/LineBottom";

const List = () => {
	return (
		<div className="flex flex-col gap-1 mt-2">
			{Array.from(Array(10)).map((_, i) => (
				<ListItem
					key={i}
					text="burger"
					href="burgers"
					icon={<FaBowlFood />}
					isActive={i}
				/>
			))}
			<LineBottom />
		</div>
	);
};

export default List;
