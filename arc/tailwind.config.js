/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Montserrat: ["Montserrat"],
			},
			boxShadow: {
				"custom-negative": "10px 10px 0px #000",
				"custom-positive": "20px 20px 0px #000",
			},
		},
	},
	plugins: [],
}
