import { useEffect } from "react";

const useHandlePageScroll = (hidden: boolean) => {
	useEffect(() => {
		if (hidden) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [hidden]);
};

export default useHandlePageScroll;
