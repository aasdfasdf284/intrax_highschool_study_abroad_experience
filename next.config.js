/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.intraxjp.com',
        port: '',
        pathname: '/summercamp/img/**',
      },
    ],
  },
  // For deployment under subdirectory
  basePath: process.env.NODE_ENV === 'production' ? '/san-diego-highschool' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/san-diego-highschool' : '',
}

module.exports = nextConfig