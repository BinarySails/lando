/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['a0.muscache.com', 'picsum.photos']
  }
}

module.exports = nextConfig
