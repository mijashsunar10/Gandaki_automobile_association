import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gamapokhara.org.np',
      },
    ],
  },
};

export default nextConfig;
