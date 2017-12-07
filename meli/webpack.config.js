const webpack = require('webpack');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      },
      {
        test: /\.scss$/,
        loader: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          use: [
            {
                loader: "css-loader" // translates CSS into CommonJS
            },
            {
                loader: "sass-loader" // compiles Sass to CSS
            }
          ],
          fallback: "style-loader" // used when css not extracted
      }))
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin({filename: 'styles.css', allChunks: true})
  ],
  devServer: {
    historyApiFallback: true,
  },
};

module.exports = config;
