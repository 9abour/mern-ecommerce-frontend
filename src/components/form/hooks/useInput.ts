import { useState } from "react";
import { ITarget } from "../../../hooks/types/index.types";

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
