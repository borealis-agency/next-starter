import "@/styles/global.css";

import { Inter } from "next/font/google";

// If custom font you are using isn't available in Google fonts, check `src/assets/README.md` on instructions how to properly include custom fonts
const fontDefinition = Inter({
	weight: [
		"400",
		"700",
	],
	subsets: [
		"latin",
	],
	// Set CSS variable that can be used in Tailwind config in order to specify what font is being used. If multiple fonts are used, use different variable suffixes (e.g. secondary, tertiary, etc.)
	variable: "--font-stack-primary",
});

export const metadata = {
	title: "Borealis Next.js Starter Template",
	description: "Next.js starter template made by Borealis",
};

export default function RootLayout({ children }: ComponentWithChildren) {
	return (
		<html lang="en" className={`${fontDefinition.className} ${fontDefinition.variable} min-h-full`}>
			<body>{children}</body>
		</html>
	);
}
