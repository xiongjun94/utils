// const path = require('path');
const base = require('./webpack.base.config');

module.exports = {
  ...base,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist',
    compress: true,
    port: 9000,
    open: true,
  },
};
