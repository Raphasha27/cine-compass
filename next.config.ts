import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/cine-compass',
  images: { unoptimized: true },
};

export default nextConfig;
