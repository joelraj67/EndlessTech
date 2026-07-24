/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local images in /public don't need remotePatterns, but this keeps
    // next/image optimisation enabled for any future remote assets.
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
