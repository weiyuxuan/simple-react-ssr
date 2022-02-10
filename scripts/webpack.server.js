const paths = require('./paths')
const nodeExternals = require('webpack-node-externals')

const server = {
  mode: 'production',

  entry: `${paths.server}/index`,

  target: 'node',

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [paths.src, paths.modules],
  },

  output: {
    path: paths.dist,
    filename: 'server.js',
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

  // in order to ignore built-in modules like path, fs, etc.
  externalsPresets: { node: true },
  // in order to ignore all modules in node_modules folder.
  externals: [nodeExternals()],
}

module.exports = server
