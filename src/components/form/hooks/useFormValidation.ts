import { useState } from "react";
import { ZodError, ZodIssue, ZodSchema } from "zod";

const useFormValidation = (
	schema: ZodSchema,
	formValues: Record<string, string>
) => {
	const [validationErrors, setValidationErrors] = useState<ZodIssue[]>([]);

	const checkFormValidation = async () => {
		try {
			await schema.parse(formValues);
			setValidationErrors([]);
			return true;
		} catch (err) {
			if (err instanceof ZodError) {
				setValidationErrors(err.errors);
				return false;
			}
		}
	};

	return { validationErrors, checkFormValidation };
};

export default useFormValidation;
