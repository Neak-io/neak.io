import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/gtag/js",
        destination: "https://www.googletagmanager.com/gtag/js",
      },
    ];
  },
};

export default nextConfig;
