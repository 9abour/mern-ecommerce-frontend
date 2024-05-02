import TextButton from "@/components/common/button/TextButton";
import { DialogPropsType } from "@/components/common/modal/types/index.types";
import { DialogContext } from "@/context/dialog/DialogProvider";
import React, { useContext } from "react";

const Dialog = ({
	title,
	message,
	conformText,
	icon,
	type = "warning",
}: DialogPropsType) => {
	const { toggleDialog, confirmAction } = useContext(DialogContext);

	return (
		<div className={`dialog__wrapper flex-jc-c ${type}`}>
			<div className="max-w-[500px] py-6 px-8 rounded-2xl bg-white">
				<div className="flex items-center gap-4">
					{icon}
					<h2 className="text-xl">{title}</h2>
				</div>
				<p className="my-4 text-grey-monsoon">{message}</p>
				<div className="mt-6">
					<TextButton
						text={conformText || ""}
						customStyles={`bg-primary-ceruleanBlue text-white hover:bg-opacity-90 shadow-button shadow-grey-iron transition-all ${type}`}
						onclick={confirmAction}
					/>
					<TextButton
						text="Cancel"
						customStyles="text-dark-balticSea hover:bg-opacity-90 ml-2 transition-all"
						onclick={toggleDialog}
					/>
				</div>
			</div>
		</div>
	);
};

export default Dialog;
