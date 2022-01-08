const rules = require('./webpack.rules');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
},
  {
    test: /\.wasm$/,
    type: "javascript/auto",
    loader: "file-loader",
    options: {
      outputPath: "wasm/"
    }
  },
  // JS
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use:
      [
        'babel-loader'
      ]
  });

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    fallback: {
      fs: false,
      child_process: false,
      path: false,
      crypto: false,
    }
  },
};
