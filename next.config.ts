import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [60, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/portraits/**',
      },
    ],
  },
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['lucide-react'], // Targeted tree-shaking for icons
  },
  async redirects() {
    return [
      {
        source: '/kansas-city-airport-shuttle',
        destination: '/airport-shuttle/kansas-city',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
