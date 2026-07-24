import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    remotePatterns: [],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
