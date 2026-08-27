/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile Three.js ecosystem for proper tree-shaking
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei", "@react-three/postprocessing"],

  // Allow WebGL canvas and external resources
  experimental: {
    optimizePackageImports: ["@react-three/drei", "gsap"],
  },
};

export default nextConfig;
