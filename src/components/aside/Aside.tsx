import React from "react";
import Menu from "./Menu";
import LineBottom from "../common/LineBottom";
import SignOff from "../common/buttons/SignOff";

const Aside = () => {
	return (
		<aside className="max-w-[200px] min-h-[calc(100vh-70px)] rounded-tr-3xl bg-dark mr-6 pt-8 shadow-slate-100">
			<Menu />
			<Menu />
			<div className="my-8">
				<SignOff />
			</div>
			<LineBottom />
		</aside>
	);
};

export default Aside;
