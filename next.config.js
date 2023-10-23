/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: false,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "www.w3.org"],
  },
};

module.exports = nextConfig
