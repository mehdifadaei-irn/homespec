import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos"], // Add other domains here if needed
  },
  webpack(config) {
    config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          typescript: true, // Enable TypeScript support
        },
      },
    ],
  });
  return config;
  },
};

export default nextConfig;
