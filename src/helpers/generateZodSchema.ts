import { IFormInput } from "@/components/common/input/types";
import { z } from 'zod';
import { IZodSchemaChecks } from "./types/zodSchema.types";

/**
 * Generates a Zod schema based on the given form inputs and schema checks.
 *
 * @param {IFormInput[]} inputs - an array of form input objects
 * @param {IZodSchemaChecks} checks - an object containing schema checks
 * @return {Object} an object containing the generated Zod schema
 */

const generateZodSchema = (inputs: IFormInput[], checks: IZodSchemaChecks) => {

  const validations = inputs.map(input => {
    switch (input.type) {
      case "email":
        return {[input.name]: z.string().email().min(input.required ? 1 : 0)}
      case "number":
        return {[input.name]: z.number().min(input.required ? 1 : 0)}
      default:
        return {[input.name]: z.string().min(input.required ? 1 : 0)}
    }
  });

  const objects = Object.assign({}, ...validations);

	const schema = z.object(objects);

  if (checks.length > 0) {
    checks.forEach(check => {
      schema.refine(() => check.condition, {
        message: check.msg
      })
    })
  }

  return {
    schema
  }
}

export default generateZodSchema;