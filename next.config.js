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
  output: 'export',
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
  },
}
