const path = require('path')

module.exports = {
  trailingSlash: true,
  images: {
    unoptimized: true
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
