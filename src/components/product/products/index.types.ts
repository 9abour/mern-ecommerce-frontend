export interface ProductType {
	id: string;
	slug: string;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
	discount: number;
	categories: string[];
	count: number;
	rate: number;
}

export interface UserProductType extends ProductType {
	inCart: boolean;
}
