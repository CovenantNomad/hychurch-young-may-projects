/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uiakkbuaxalhtkhhekjo.supabase.co'
      }
    ]
  }
};

export default nextConfig;
