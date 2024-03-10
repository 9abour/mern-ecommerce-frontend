import { TooltipPropsType } from "@/components/common/modal/types/index.types";
import React from "react";

const Tooltip = ({
	children,
	direction,
	customStyles = "",
}: TooltipPropsType) => {
	return (
		<div className={`tooltip__wrapper tooltip__${direction}`}>
			<div className={`tooltip ${customStyles}`}>{children}</div>
		</div>
	);
};

export default Tooltip;
