/** @type {import('next').NextConfig} */
const nextConfig = {
  // In React v18, useEffect runs twice on purpose in development mode.
  // It's a technique to surface bugs due to missing cleanup functions in effects.
  // Do not disable React Strict Mode just to avoid that behavior!
  reactStrictMode: true,
  output: "standalone",
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
