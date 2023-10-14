"use client";

import React, { useEffect, useState } from "react";
import Table from "./Table";
import TextButton from "../../common/button/TextButton";
import { useAppDispatch, useAppSelector } from "@/rtk/store/store";
import { clearCart } from "@/rtk/slices/cart/cartSlice";
import { getCartTotal } from "../helper/getCartTotal";
import { ICartTotal } from "../types";

const Cart = () => {
	const { products } = useAppSelector(state => state.cartSlice);
	const dispatch = useAppDispatch();
	const [total, setTotal] = useState<ICartTotal>({
		count: 0,
		discount: 0,
		total: 0,
	});

	useEffect(() => {
		setTotal(getCartTotal(products));
	}, [products]);

	return (
		<section className="container mx-auto bg-white shadow-clg rounded-3xl p-4">
			{products.length ? (
				<>
					<div className="flex flex-col lg:flex-row justify-between">
						<div className="w-full lg:w-8/12">
							<h4 className="text-2xl font-semibold text-dark">
								Shopping <span className="font-normal">Cart</span>
							</h4>
							<Table />
						</div>

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
					</div>

					<div className="flex justify-end gap-4">
						<TextButton
							text="Clear all"
							customStyles="block mt-4 uppercase text-sm shadow-clg bg-red-600 hover:bg-dark hover:text-white text-white transition duration-300 font-semibold"
							onclick={() => dispatch(clearCart())}
						/>
						<TextButton
							text="checkout"
							customStyles="block mt-4 uppercase text-sm shadow-csmYellow hover:shadow-clg bg-primary hover:bg-dark hover:text-white text-dark transition duration-300 font-semibold"
						/>
					</div>
				</>
			) : (
				<div className="p-8 text-gray-300 w-fit mx-auto text-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="300"
						height="300"
						viewBox="0 0 24 24"
					>
						<g fill="currentColor">
							<path
								d="M4.083 10.894c.439-2.34.658-3.511 1.491-4.203C6.408 6 7.598 6 9.98 6h4.04c2.383 0 3.573 0 4.407.691c.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022C19.794 22 18.12 22 14.771 22H9.23c-3.349 0-5.024 0-5.923-1.084c-.9-1.084-.591-2.73.026-6.022l.75-4Z"
								opacity=".5"
							/>
							<path d="M9.75 5a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5a3.75 3.75 0 1 0-7.5 0v1.015C8.688 6.002 9.184 6 9.75 6V5Zm-.22 5.47a.75.75 0 0 0-1.06 1.06L10.94 14l-2.47 2.47a.75.75 0 1 0 1.06 1.06L12 15.06l2.47 2.47a.75.75 0 0 0 1.06-1.06L13.06 14l2.47-2.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47Z" />
						</g>
					</svg>
					<h3 className="font-semibold">Your cart is empty!</h3>
				</div>
			)}
		</section>
	);
};

export default Cart;
