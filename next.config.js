const path = require('path')

module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      // test: path.resolve(__dirname, 'pages/**/*.md'),
      use: 'raw-loader',
    })
    return config
  },
}
