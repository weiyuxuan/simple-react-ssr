const path = require('path')

module.exports = {
  client: path.resolve(__dirname, '../entry/client'),
  server: path.resolve(__dirname, '../entry/server'),
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  public: path.resolve(__dirname, '../public'),
  modules: path.resolve(__dirname, '../node_modules'),
}
