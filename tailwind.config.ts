import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: "#3bb77e",
				primaryLight: "#61d7a0",
				lightGreen: "#e2f9ee",
				dark: "#36373b",
				secondaryDark: "#4a4b4f",
				primaryYellow: "#f3cd3a",
				lightYellow: "#fdcd45",
			},
			boxShadow: {
				csm: "0 0px 10px -5px rgba(0, 0, 0, 0.2)",
				clg: "0px 9px 30px rgba(0, 0, 0, 0.1)",
			},
		},
	},
	plugins: [],
};
export default config;
