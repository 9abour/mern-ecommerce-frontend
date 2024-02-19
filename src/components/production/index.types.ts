export interface ITab {
	name: string;
}

export type ITabs = ITab[];

export interface ITabsProps {
	list: ITabs;
	isActive: ITab;
	setIsActive: (e: ITab) => void;
}
