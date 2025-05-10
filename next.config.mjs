/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Exclude Prisma from the build process
    if (isServer) {
      config.externals = [...config.externals, '@prisma/client', 'prisma'];
    }
    
    return config;
  },
  // Disable TypeScript checking in production build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disable ESLint during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig; 