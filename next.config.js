/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Remove basePath and assetPrefix since you're using username.github.io
  // basePath: '', // Remove this line
  // assetPrefix: '', // Remove this line
}

module.exports = nextConfig