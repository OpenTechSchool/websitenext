const path = require('path')

const isGithubActions = process.env.GITHUB_ACTIONS || false
const hasCustomDomain = process.env.CUSTOM_DOMAIN === 'true'

let assetPrefix = ''
let basePath = ''

if (isGithubActions && !hasCustomDomain) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(assetPrefix && { assetPrefix }),
  ...(basePath && { basePath }),
  trailingSlash: true,
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    })
    return config
  },
  env: {
    NEXT_PUBLIC_GITHUB_ACTIONS: process.env.GITHUB_ACTIONS || 'false',
    NEXT_PUBLIC_GITHUB_REPOSITORY: process.env.GITHUB_REPOSITORY || '',
    NEXT_PUBLIC_CUSTOM_DOMAIN: process.env.CUSTOM_DOMAIN || 'false',
  },
}

module.exports = nextConfig
