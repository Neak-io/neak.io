import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // for static site deployment
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
