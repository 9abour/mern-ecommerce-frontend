const defaultProductInputs = [
	{
		type: "text",
		name: "name",
		placeholder: "Name",
		required: true,
		autoFocus: true,
		value: "",
		customStyles: "col-span-4",
	},
	{
		type: "number",
		name: "price",
		placeholder: "Price",
		required: true,
		value: "",
		customStyles: "col-span-2",
	},
	{
		type: "number",
		name: "count",
		placeholder: "Stock count",
		required: true,
		value: "",
		customStyles: "col-span-1",
	},
	{
		type: "number",
		name: "rate",
		placeholder: "Rate",
		required: true,
		value: "",
		customStyles: "col-span-1",
	},
	{
		type: "textarea",
		name: "description",
		placeholder: "Description",
		required: true,
		value: "",
		customStyles:
			"w-full h-[100px] min-h-[100px] border shadow-cmd rounded-xl py-2 px-4 justify-between gap-2 text-xl bg-white outline-none focus:border-primary col-span-4",
	},
];

export { defaultProductInputs };
