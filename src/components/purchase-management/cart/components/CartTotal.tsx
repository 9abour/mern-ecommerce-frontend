import { ICartTotal } from "@/components/purchase-management/cart/index.types";
import React from "react";

const CartTotal = ({ total }: { total: ICartTotal }) => {
	return (
		<div className="w-full lg:w-4/12 mt-8 lg:mt-0">
			<h4 className="text-2xl font-semibold text-dark lg:ml-4">
				Cart <span className="font-normal">Total</span>
			</h4>
			<div className="h-fit lg:pl-4 pt-4 lg:pb-8">
				<table className="h-full flex justify-between items-center bg-secondaryDark rounded-2xl text-white text-lg p-4">
					<thead className="[&>tr>th]:p-2 [&>tr>th]:text-start">
						<tr>
							<th>Count</th>
						</tr>
						<tr>
							<th>Discount</th>
						</tr>
						<tr>
							<th>Total</th>
						</tr>
					</thead>
					<tbody className="[&>tr>td]:p-2 text-primary">
						<tr>
							<td>{total.count} item</td>
						</tr>
						<tr>
							<td>{total.discount} $</td>
						</tr>
						<tr>
							<td>{total.total} $</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CartTotal;
