const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const paths = require('./paths')
const config = require('../configs/local.json')

const server = {
  mode: 'production',

  entry: `${paths.server}/index`,

  output: {
    path: paths.dist,
    filename: 'server.js',
  },

  target: 'node',

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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentHashSalt: 'ssr',
                localIdentName: '[hash:8]-[local]',
              },
            },
          },
        ],
      },
    ],
  },

  // in order to ignore built-in modules like path, fs, etc.
  externalsPresets: { node: true },
  // in order to ignore all modules in node_modules folder.
  externals: [nodeExternals()],

  plugins: [
    new WebpackBar(),
    new webpack.DefinePlugin({
      __IS_BROWSER__: 'false',
      __GITHUB_TOKEN__: JSON.stringify(config.GITHUB_TOKEN),
    }),
    new MiniCssExtractPlugin({
      filename: './public/main.css',
    }),
  ],
}

module.exports = server
