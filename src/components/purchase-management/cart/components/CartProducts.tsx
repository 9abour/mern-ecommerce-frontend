import React from "react";
import TableItem from "./TableItem";
import { useAppSelector } from "@/rtk/store/store";

const CartProducts = () => {
	const { products } = useAppSelector(state => state.cartSlice);
	return (
		<div className="w-full lg:w-8/12">
			<h4 className="text-2xl font-semibold text-dark">
				Shopping <span className="font-normal">Cart</span>
			</h4>
			<table className="w-full">
				{products.map(product => (
					<TableItem key={product.id} product={product} />
				))}
			</table>
		</div>
	);
};

export default CartProducts;
