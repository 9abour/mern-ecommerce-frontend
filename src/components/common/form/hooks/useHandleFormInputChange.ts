const useHandleFormInputChange = () => {
	const formValues: Record<string, string> = {};

	const onFormValueChange = ({ value, key }: Record<string, string>) => {
		formValues[key] = value;
	};

	return {
		formValues,
		onFormValueChange,
	};
};

export default useHandleFormInputChange;
