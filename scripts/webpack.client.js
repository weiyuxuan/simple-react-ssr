const webpack = require('webpack')

const paths = require('./paths')
const config = require('../configs/local.json')

const client = {
  mode: 'production',

  entry: paths.client,

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
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentHashSalt: 'ssr',
                localIdentName: '[hash:8]-[local]',
                exportOnlyLocals: true,
              },
            },
          },
        ],
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
