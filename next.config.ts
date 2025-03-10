import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  basePath: "/your-repo-name", // Replace with your GitHub repo name
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
  /* config options here */
};

export default nextConfig;
