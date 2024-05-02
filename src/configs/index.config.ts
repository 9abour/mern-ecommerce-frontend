const BASE_API_URL = `http://${process.env.NEXT_PUBLIC_LOCALHOST}:5000`;

enum CLOUDINARY_CONFIG {
	CLOUD_NAME = "driq6cudi",
	UPLOAD_PRESET = "jwtsahay",
}

export { BASE_API_URL, CLOUDINARY_CONFIG };
