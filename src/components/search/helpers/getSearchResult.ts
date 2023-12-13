export const getSearchResult = (currentPath: string): string => {
	const splitPath = currentPath.split("/");
	const param = splitPath[splitPath.length - 1];
	const paramValue = param.split("=")[1];

	return paramValue;
};
