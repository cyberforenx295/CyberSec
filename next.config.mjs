/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**'
      }
    ]
  },
  experimental: {
    // Enable server actions if needed later
    serverActions: {
      bodySizeLimit: '2mb'
    }
  }
};

export default nextConfig;