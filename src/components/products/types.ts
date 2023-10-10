export interface IProduct {
	id: string;
	name: string;
	description: string;
	price: number;
	image: string;
	discount: number;
	categories: string[];
	inCart: boolean;
	rate: number;
	available: boolean;
	freeDelivery?: boolean;
	weight: string;
}
