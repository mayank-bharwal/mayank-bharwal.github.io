/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // If deploying to user/organization site (username.github.io)
  basePath: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/repository-name/' : '',
}

module.exports = nextConfig
