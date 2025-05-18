import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// In React >= v18, useEffect and ref function runs twice on purpose in development mode.
	// It's a technique to surface bugs due to missing cleanup functions in effects and refs.
	// Do not disable React Strict Mode just to avoid that behavior!
	reactStrictMode: true,
	output: "standalone",
	productionBrowserSourceMaps: false,
};

export default nextConfig;
