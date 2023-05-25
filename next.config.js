/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
      MONGODB_URI: process.env.MONGODB_URI
    },
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
      },
      images: {
        domains: ['lh3.googleusercontent.com'],
      },
      webpack(config) {
        config.experiments = {
          ...config.experiments,
          topLevelAwait: true,
        }
        return config
      }
  };

module.exports = nextConfig

  