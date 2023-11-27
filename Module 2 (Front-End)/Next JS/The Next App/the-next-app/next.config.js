/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'purwadhika.com',
            port: '',
            pathname: '/static/**',
          },
        ],
      },
}

module.exports = nextConfig
