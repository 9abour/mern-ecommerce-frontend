import { useMemo, useState } from "react";

export class NavbarHelper {
	public static isWindowScrolled() {
		const [isScrolled, setIsScrolled] = useState(false);

		if (typeof window !== undefined) {
			window.addEventListener("scroll", () => {
				setIsScrolled(window.pageYOffset > 0 ? true : false);
			});
		}

		const isScrolledValue = useMemo(() => {
			return true;
		}, [isScrolled]);

		return isScrolledValue;
	}
}
