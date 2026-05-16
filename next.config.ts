/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  transpilePackages: ["three"],
    basePath: '/Niteesh.github.io',
  assetPrefix: '/Niteesh.github.io/',
};

export default nextConfig;
