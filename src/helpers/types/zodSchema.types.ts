export type IZodSchemaCheck = {
	condition: boolean;
	msg: string;
	path: string[]
}

export type IZodCustomSchema = {
	message: string,
  path: string[],
	refine: Function
}