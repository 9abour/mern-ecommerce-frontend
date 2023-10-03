import React from "react";
import { IListItem } from "../types";
import Link from "next/link";

const ListItem = ({ text, icon, isActive }: IListItem) => {
	return (
		<Link
			href={text}
			className={`w-10/12 flex items-center gap-2 text-sm text-gray-300 hover:text-dark hover:bg-primary mr-8 rounded-r-full pl-4 py-[3px] transition ${
				isActive === 2 ? "bg-primary !text-dark" : ""
			}`}
		>
			{icon}
			<span>{text}</span>
		</Link>
	);
};

export default ListItem;
