import React from "react";
import TableItem from "./TableItem";
import { useAppSelector } from "@/rtk/store/store";

const Table = () => {
	const { products } = useAppSelector(state => state.cartSlice);
	return (
		<table className="w-full">
			{products.map(product => (
				<TableItem key={product.id} product={product} />
			))}
		</table>
	);
};

export default Table;
