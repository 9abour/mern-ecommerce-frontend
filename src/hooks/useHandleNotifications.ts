import handleAxiosError from "@/helpers/handleAxiosError";
import { sendNotificationFunc } from "@/hooks/types/index.types";
import { toast } from "sonner";

const useHandleNotifications = (): sendNotificationFunc => {
	const handleErrors = (error: unknown) => {
		const axiosError = handleAxiosError(error);
		const errors = axiosError.errors;

		if (errors) {
			errors.map(msg => toast.error(msg));
		}
	};

	const handleData = (data: any) => {
		const msg = data.data.msg;
		toast.success(msg);
	};

	const sendNotifications = <Data>(
		error: unknown | null,
		data: null | Data
	) => {
		if (error) {
			handleErrors(error);
		}

		if (data) {
			handleData(data);
		}
	};

	return {
		sendNotifications,
	};
};

export default useHandleNotifications;
