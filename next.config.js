/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
    API_BASE_URL: process.env.API_BASE_URL,
    API_IMAGE_BASE_URL: process.env.API_IMAGE_BASE_URL,
  },
}

module.exports = nextConfig
