import React from "react";
import { IListItem } from "../index.types";
import Link from "next/link";

const ListItem = ({ text, href, icon, isActive }: IListItem) => {
	return (
		<Link
			href={`/products/${href}`}
			className={`w-10/12 flex items-center gap-2 text-sm hover:!text-dark hover:bg-primary mr-8 rounded-r-full pl-4 py-[3px] transition ${
				isActive === 2 ? "bg-primary !text-dark" : "!text-gray-300"
			}`}
		>
			{icon}
			<span className="text-sm font-medium uppercase">{text}</span>
		</Link>
	);
};

export default ListItem;
