/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: false,
  },
  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   // ignoreBuildErrors: true,
  // },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    // Other environment variables...
  },
};

module.exports = nextConfig
