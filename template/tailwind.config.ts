import type { Config } from "tailwindcss";

const customTailwindConfig: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	// Don't extend default Tailwind theme, override it. We don't want to use default Tailwind theme because our designs are custom.
	// Defaults can be imported if neccessary for example to use default animations
	// import defaultTailwindConfig from "tailwindcss/defaultConfig"; and then spread whatever defaults you require from default theme object

	// !!!! Make sure to update tailwind-merge config in `template/src/utility/classes.ts` when adding values to custom Tailwind theme. This will ensure tailwind-merge recognizes custom theme values and merges them properly.
	theme: {},
	plugins: [],
};

export default customTailwindConfig;
