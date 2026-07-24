/** @type {import('next').NextConfig} */

// GitHub Pages serves Project Pages from a subpath (/EndlessTech/), so the
// static export must be built with a matching basePath + assetPrefix. All
// internal links use next/link and all images use next/image, both of which
// respect basePath automatically. No raw <a href> or <img src> exist.
const REPO_NAME = 'EndlessTech';
const isPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  reactStrictMode: true,
  images: {
    // GitHub Pages cannot run the Next.js image optimizer; serve originals.
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  // Only enable static export + basePath under CI so local `next dev` stays
  // on the root path. The deploy workflow sets GITHUB_ACTIONS=true.
  ...(isPages
    ? {
        output: 'export',
        basePath: `/${REPO_NAME}`,
        assetPrefix: `/${REPO_NAME}/`,
      }
    : {}),
};

module.exports = nextConfig;
