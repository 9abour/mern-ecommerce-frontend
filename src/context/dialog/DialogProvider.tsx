"use client";

import useHandlePageScroll from "@/hooks/scroll-control/useHandlePageScroll";
import { ChildrenType } from "@/types/index.types";
import { createContext, useState } from "react";

const initialState = {
	isOpen: false,
	toggleDialog: (savedConfirmFunc?: Function) => {},
	confirmAction: (confirmFunc: Function) => {},
};

const DialogContext = createContext(initialState);

const DialogProvider = ({ children }: ChildrenType) => {
	const [isOpen, setIsOpen] = useState<boolean>(initialState.isOpen);
	const [savedConfirmFunc, setSavedConfirmFunc] = useState<null | Function>(
		null
	);

	const toggleDialog = (savedConfirmFunc?: null | Function) => {
		if (savedConfirmFunc) {
			setSavedConfirmFunc(savedConfirmFunc);
		}
		setIsOpen(!isOpen);
	};

	const confirmAction = () => {
		if (savedConfirmFunc) {
			savedConfirmFunc();
			toggleDialog();
			setSavedConfirmFunc(null);
		}
	};

	useHandlePageScroll(isOpen);

	return (
		<DialogContext.Provider value={{ isOpen, toggleDialog, confirmAction }}>
			{children}
		</DialogContext.Provider>
	);
};

export { DialogContext };
export default DialogProvider;
