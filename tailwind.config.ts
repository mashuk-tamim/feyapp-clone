import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"headline-gradient":
					"linear-gradient(to right, rgb(179,174,245) 2%, rgb(215,203,231) 20%, rgb(229,200,200) 31%, rgb(234,168,121) 70%)",
				"radial-gradient":
					"radial-gradient(circle, rgba(0,0,0,0.2) 40%,rgba(0,0,0,1) 70%)",
			},
			colors: {
				gray: "#868f97",
				blue: "#479ffa",
				blueLight: "#0b0b0f",
			},
		},
	},
	plugins: [],
};
export default config
