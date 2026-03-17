import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  sassOptions: {
    implementation: path.resolve("./node_modules/sass"),
  },
};

export default nextConfig;
