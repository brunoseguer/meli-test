const webpack = require('webpack');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  context: APP_DIR,
  entry: './index.jsx',
  output: {
    path: BUILD_DIR,
    filename: './bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js*?/,
        include: APP_DIR,
        loader: 'babel-loader',
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  }
};

module.exports = config;
