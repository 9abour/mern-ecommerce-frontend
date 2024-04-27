import useToggle from "@/hooks/useToggle";
import { useState } from "react";
import { ColorResult } from "react-color";

const useColorPicker = (defaultColor: string) => {
	const [color, setColor] = useState(defaultColor);
	const { currentState, toggle } = useToggle(false);

	const changeColor = (color: ColorResult) => {
		setColor(color.hex);
	};

	const resetDefaultColor = () => {
		setColor(defaultColor);
	};

	return {
		color,
		changeColor,
		hideColorInput: toggle,
		isColorInputOpen: currentState,
		resetDefaultColor,
	};
};

export default useColorPicker;
