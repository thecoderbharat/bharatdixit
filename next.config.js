/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow all remote domains for future CDN/external images
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
    // Formats: prefer AVIF then WebP
    formats: ['image/avif', 'image/webp'],
  },
  // Enable strict mode for better debugging
  reactStrictMode: true,
}

module.exports = nextConfig
