import { useState } from "react";
import { ZodIssue, ZodSchema } from "zod";

const useFormValidation = (schema: ZodSchema, formValues: Record<string, string>) => {
	const [validationErrors, setValidationErrors] = useState<ZodIssue[]>([]);

    const checkFormValidation = () => {
      try {
        schema.parse(formValues);
        setValidationErrors([])
    
      } catch (err) {
        if (err instanceof Error) {
          const errorsStr = err.toString()
          const errorsObj = JSON.parse(errorsStr);
          
          setValidationErrors(errorsObj)
        }
          
      }
    }

  return { validationErrors, checkFormValidation }
}

export default useFormValidation;