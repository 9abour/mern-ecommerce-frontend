import { IFormInput } from "@/components/common/input/types";
import { ZodSchema, z } from 'zod';
import { IZodCustomSchema, IZodSchemaCheck } from "./types/zodSchema.types";

/**
 * Generates a Zod schema based on the given form inputs and schema checks.
 *
 * @param {IFormInput[]} inputs - an array of form input objects
 * @param {IZodSchemaChecks} checks - an object containing schema checks
 * @return {Object} an object containing the generated Zod schema
 */

const generateZodSchema = (inputs: IFormInput[], checks: IZodSchemaCheck[]) => {
  const validations = inputs.map(input => {
    switch (input.type) {
      case "email":
        return {[input.name]: z.string().email().min(input.min ? input.min : input.required ? 1 : 0)}
      case "number":
        return {[input.name]: z.number().min(input.min ? input.min : input.required ? 1 : 0)}
      default:
        return {[input.name]: z.string().min(input.min ? input.min : input.required ? 1 : 0)}
    }
  });

  const objects = Object.assign({}, ...validations);
  let schema: ZodSchema | IZodCustomSchema = z.object(objects);

  if (checks.length > 0) {
    checks.forEach((check) => {
      schema = schema.refine(() => check.condition, {
        message: check.msg,
        path: check.path,
      });
    });
  }

  return schema;
}

export default generateZodSchema;