const path = require('path')

module.exports = {
  src: path.resolve(__dirname, '../src'),
  server: path.resolve(__dirname, '../server'),
  dist: path.resolve(__dirname, '../dist'),
  public: path.resolve(__dirname, '../public'),
  modules: path.resolve(__dirname, '../node_modules'),
}
