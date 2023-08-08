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
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    // Other environment variables...
  },
};

module.exports = nextConfig
