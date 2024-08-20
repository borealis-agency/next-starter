/** @type {import('tailwindcss').Config} */
module.exports = {
	// If third party libraries with Tailwind classes and without published CSS files are used,
	// add their paths to `content` in order for Tailwind to generate/purge all appropriate classes.
	// example: "./node_modules/@thirdPartyLibrary/**/*.{js,ts,jsx,tsx,mdx}"
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
