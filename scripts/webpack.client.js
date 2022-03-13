const paths = require('./paths')
const config = require('../configs/local.json')
const webpack = require('webpack')

const client = {
  mode: 'production',

  entry: `${paths.src}/client`,

  output: {
    path: `${paths.dist}/public`,
    filename: 'bundle.js',
  },

  target: 'web',

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [paths.src, paths.modules],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      __IS_BROWSER__: 'true',
      __GITHUB_TOKEN__: JSON.stringify(config.GITHUB_TOKEN),
    }),
  ],
}

module.exports = client
