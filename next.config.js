/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/portfolio',
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  images: { unoptimized: true },
}

module.exports = nextConfig
