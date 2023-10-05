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
				primary: "#fbc644",
				primaryLight: "#faf5e5",
				primaryDark: "#f4ab3a",
				lightYellow: "#fdcd45",
				dark: "#36373b",
				secondaryDark: "#4a4b4f",
				primaryBlue: "#669eeb",
			},
			boxShadow: {
				csm: "0 0px 10px -5px rgba(0, 0, 0, 0.2)",
				clg: "0px 9px 30px rgba(0, 0, 0, 0.1)",
				circleYellow:
					"0px 0px 0 3px rgb(255 255 255), 0px 0px 0 6px #fbc644, 0px 9px 30px rgba(0, 0, 0, 0.1)",
				sliderCircleYellow: "0 0 0 8px rgba(251, 198, 68,.25)",
				cYellow: "0px 5px 10px 10px rgba(251, 198, 68,0.50)",
				csmYellow: "0px 0px 10px 2px rgba(251, 198, 68,0.50)",
			},
		},
	},
	plugins: [],
};
export default config;
