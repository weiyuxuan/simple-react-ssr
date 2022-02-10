const paths = require('./paths')

const client = {
  mode: 'production',

  entry: `${paths.src}/client`,

  target: 'web',

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [paths.src, paths.modules],
  },

  output: {
    path: `${paths.dist}/public`,
    filename: 'bundle.js',
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
}

module.exports = client
