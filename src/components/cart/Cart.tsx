import React from "react";
import Table from "./Table";
import TextButton from "../common/button/TextButton";

const Cart = () => {
	return (
		<section className="container mx-auto bg-white shadow-clg rounded-3xl p-4">
			<div className="flex flex-col lg:flex-row justify-between">
				<div className="w-full lg:w-8/12">
					<h4 className="text-2xl font-semibold text-dark">
						Shopping <span className="font-normal">Cart</span>
					</h4>

					<Table />
				</div>
				<div className="w-full lg:w-4/12 mt-8 lg:mt-0">
					<h4 className="text-2xl font-semibold text-dark">
						Cart <span className="font-normal">Total</span>
					</h4>
					<div className="h-full lg:pl-4 pt-4 lg:pb-8">
						<table className="h-full flex justify-between items-center bg-secondaryDark rounded-2xl text-white text-lg p-4">
							<thead className="[&>tr>th]:p-2 [&>tr>th]:text-start">
								<tr>
									<th>Subtotal</th>
								</tr>
								<tr>
									<th>Shopping</th>
								</tr>
								<tr>
									<th>Total</th>
								</tr>
							</thead>
							<tbody className="[&>tr>td]:p-2 text-primary">
								<tr>
									<td>$ 20.99</td>
								</tr>
								<tr>
									<td>$ 20.99</td>
								</tr>
								<tr>
									<td>$ 20.99</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<TextButton
				text="checkout"
				customStyles="block mt-4 uppercase text-sm shadow-csmYellow hover:shadow-clg bg-primary hover:bg-dark hover:text-white text-dark transition duration-300 font-semibold"
			/>
		</section>
	);
};

export default Cart;
