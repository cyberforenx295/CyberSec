/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable server actions if needed later
    serverActions: {
      bodySizeLimit: '2mb'
    }
  }
};

export default nextConfig;