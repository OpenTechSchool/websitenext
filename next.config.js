const path = require('path')
const withImages = require('next-images')

module.exports = withImages({
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
})
