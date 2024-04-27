"use client";

import { CustomColorPickerProps } from "@/components/common/form/types/index.types";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import React from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({
	color,
	hideColorInput,
	isColorInputOpen,
	changeColor,
}: CustomColorPickerProps) => {
	const colorPickerRef: any = useOnClickOutside(hideColorInput);

	return (
		<div className="col-span-4">
			<button
				className="w-[110px] h-[30px] rounded-full border-[4px] border-white text-white font-semibold shadow-[0px_1px_5px_1px,0px_0px_0px_1px] shadow-grey-iron"
				style={{
					backgroundColor: color,
				}}
				onClick={hideColorInput}
				type="button"
			>
				Select Color
			</button>

			{color}
			{isColorInputOpen ? (
				<div className="relative" ref={colorPickerRef}>
					<SketchPicker
						color={color}
						onChange={changeColor}
						className="absolute"
					/>
				</div>
			) : null}
		</div>
	);
};

export default ColorPicker;
