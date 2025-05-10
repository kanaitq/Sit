/** @type {import('next').NextConfig} */
const nextConfig = {
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