/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self';"
          }
        ]
      }
    ];
  },
  // Disable ESLint during production builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // ... any other Next.js config ...
};

export default nextConfig;
