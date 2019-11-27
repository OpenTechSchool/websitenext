module.exports = {
  webpack: function(config) {
    // raw-loader to process markdown
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  }
}
