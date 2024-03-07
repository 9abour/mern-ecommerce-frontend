import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {useMediaQuery} from "react-responsive";
import {IMenuButton} from "@/components/common/button/types";

export const useHandleMenu = ({ isMenuOpen, setIsMenuOpen }: IMenuButton) => {
    const [display, setDisplay] = useState("");

    const isMidScreenValue = useMediaQuery({ query: "(max-width: 768px)" });
    const pathname = usePathname();

    useEffect(() => {
        if (isMenuOpen) {
            setIsMenuOpen(isMidScreenValue);
        }
    }, [isMidScreenValue]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isMenuOpen) {
            setDisplay("");
        } else {
            setTimeout(() => {
                setDisplay("none");
            }, 500);
        }
    }, [isMenuOpen]);

    return {
        display
    }
}