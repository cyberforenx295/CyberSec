/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**'
      }
    ]
  },
  experimental: {
    // Enable server actions if needed later (not used for static export)
    serverActions: {
      bodySizeLimit: '2mb'
    }
  }
};

export default nextConfig;