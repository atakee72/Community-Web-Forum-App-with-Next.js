/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        hostname: "",
        // port: "",
        // pathname: "/my-bucket/**",
      },
    ],
  },
};

module.exports = nextConfig
