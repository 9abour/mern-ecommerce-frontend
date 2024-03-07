import { ITarget } from "@/hooks/types/index.types";
import { useState } from "react";

const useInput = (
	initialState: string
): [
	{
		value: string;
		onChange: (e: ITarget) => void;
	},
	() => void
] => {
	const [value, setValue] = useState(initialState);

	return [
		{
			value,
			onChange: (e: ITarget) => setValue(e.target.value.toString()),
		},
		() => setValue(initialState),
	];
};

export default useInput;
