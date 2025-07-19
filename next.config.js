const path = require('path')

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  ...(assetPrefix && { assetPrefix }),
  ...(basePath && { basePath }),
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      // test: path.resolve(__dirname, 'pages/**/*.md'),
      use: 'raw-loader',
    })
    return config
  },
  env: {
    external: {
      MEETUP_URL: 'http://meetup.com',
    },
    // Make build-time environment variables available at runtime
    NEXT_PUBLIC_GITHUB_ACTIONS: process.env.GITHUB_ACTIONS || 'false',
    NEXT_PUBLIC_GITHUB_REPOSITORY: process.env.GITHUB_REPOSITORY || '',
  },
}
