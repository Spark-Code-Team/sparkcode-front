/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: ["api.sparkcode-service.com"],
  },
};

export default nextConfig;
