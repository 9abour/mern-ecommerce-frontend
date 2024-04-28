import TextButton from "@/components/common/button/TextButton";
import { DialogType } from "@/components/common/modal/types/index.types";
import { DialogContext } from "@/context/dialog/DialogProvider";
import React, { useContext } from "react";

const Modal = ({ title, message, icon, type = "warning" }: DialogType) => {
	const { toggleDialog } = useContext(DialogContext);

	return (
		<div className={`dialog__wrapper flex-jc-c ${type}`}>
			<div className="w-[350px] max-w-[500px] py-6 px-8 rounded-2xl bg-white">
				<div className="flex items-center gap-4">
					{icon}
					<h2 className="text-xl">{title}</h2>
				</div>
				<p className="my-4 text-grey-monsoon">{message}</p>
				<div className="mt-6">
					<TextButton
						text="Okay"
						customStyles="text-dark bg-primary hover:bg-opacity-90 transition-all"
						onclick={toggleDialog}
					/>
				</div>
			</div>
		</div>
	);
};

export default Modal;
