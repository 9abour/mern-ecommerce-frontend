export interface ITarget {
	target: { value: React.SetStateAction<string | number> };
}

export type sendNotificationFunc = {
	sendNotifications: <Data>(error: unknown | null, data: null | Data) => void;
};
