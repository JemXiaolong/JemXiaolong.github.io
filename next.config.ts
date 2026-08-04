import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: GitHub Pages serves plain files, there is no Node runtime.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
