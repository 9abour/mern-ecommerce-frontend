import {MutableRefObject, useEffect, useState} from "react";

export const useHandleHeight = (refHeight: MutableRefObject<HTMLDivElement | null>) => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (refHeight.current) {
            setHeight(refHeight.current.offsetHeight);
        }
    }, [refHeight]);

    return {
        height
    }
}