import axios from "axios";
import { toast } from "sonner";

export const signOff = () => {
	const signOff = async () => {
		try {
			await axios.post("/api/auth/signoff");
			window.location.reload();
			toast.success("Signed Off");
		} catch (e) {
			console.log(e);
		}
	};
};
