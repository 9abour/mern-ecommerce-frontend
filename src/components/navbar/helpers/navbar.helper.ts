import { useMemo, useState } from "react";

export class NavbarHelper {
	public static getIsWindowScrolled(): boolean {
		const [isScrolled, setIsScrolled] = useState(false);

		if (typeof window !== undefined) {
			window.addEventListener("scroll", () => {
				setIsScrolled(window.pageYOffset > 1 ? true : false);
			});
		}

		const isScrolledValue = useMemo(() => {
			return isScrolled;
		}, [isScrolled]);

		return isScrolledValue;
	}

	public static getIsMidScreen() {
		const [isMidScreen, setIsMidScreen] = useState(false);

		if (typeof window !== undefined) {
			window.addEventListener("resize", () => {
				setIsMidScreen(window.innerWidth < 768);
			});
		}

		const isMidScreenValue = useMemo(() => {
			return isMidScreen;
		}, [isMidScreen]);

		return isMidScreenValue;
	}
}
