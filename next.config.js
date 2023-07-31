/** @type {import('next').NextConfig} */
const nextConfig = {
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
