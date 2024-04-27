import { ZodIssue } from "zod";

const getZodErrorPath = (inputName: string, zodErrors: ZodIssue[]): ZodIssue | null => {
  if (!zodErrors) return null;

  const error = zodErrors.find(zodError => zodError.path[0] == inputName);

  return error ? error : null;
}

export default getZodErrorPath;