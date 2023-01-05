/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'media.tenor.com',
      'res.cloudinary.com',
    ]
  }
}

module.exports = nextConfig
