import { IFormInput } from "@/components/common/input/types";
import { ZodSchema, z } from "zod";
import { IZodCustomSchema, IZodSchemaCheck } from "../types/zodSchema.types";

/**
 * Generates a Zod schema based on the provided form inputs and optional checks.
 *
 * @param {IFormInput[]} inputs - an array of form input objects
 * @param {IZodSchemaCheck[]} [checks] - an optional array of Zod schema check objects
 * @return {ZodSchema | IZodCustomSchema} the generated Zod schema
 */

const generateZodSchema = (
	inputs: IFormInput[],
	checks?: IZodSchemaCheck[]
) => {
	const validations = inputs.map(input => {
		switch (input.type) {
			case "email":
				return {
					[input.name]: z
						.string()
						.min(input.min ? input.min : input.required ? 1 : 0, "Short value")
						.email(),
				};
			case "number":
				return {
					[input.name]: z
						.string()
						.min(input.min ?? (input.required ? 1 : 0), "Short value")
						.refine(value => Number(value), {
							message: "Invalid number format",
						}),
				};
			default:
				return {
					[input.name]: z
						.string()
						.min(input.min ? input.min : input.required ? 1 : 0, "Short value"),
				};
		}
	});

	const objects = Object.assign({}, ...validations);
	let schema: ZodSchema | IZodCustomSchema = z.object(objects);

	if (checks && checks.length > 0) {
		checks.forEach(check => {
			schema = schema.refine(() => check.condition, {
				message: check.msg,
				path: check.path,
			});
		});
	}

	return schema;
};

export default generateZodSchema;
