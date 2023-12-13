export const getCurrentProductsCategory = (pathname: string): string => {
	const splitPathname = pathname.split("/");

	const searchResult = splitPathname[splitPathname.length - 1];

	return searchResult;
};
