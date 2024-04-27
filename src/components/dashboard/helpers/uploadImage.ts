import { CLOUDINARY_CONFIG } from "@/configs/index.config";
import HandleApiRequests from "@/helpers/handleApiRequests";

const uploadImage = async (file: File) => {
	const formData = new FormData();
	formData.append("file", file);
	formData.append("upload_preset", CLOUDINARY_CONFIG.UPLOAD_PRESET);

	const result: any = await HandleApiRequests.handlePublicApiRequest({
		url: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.CLOUD_NAME}/upload`,
		method: "POST",
		body: formData,
	});

	const url = result.secure_url;
	return url;
};

export default uploadImage;
