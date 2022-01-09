const rules = require('./webpack.rules');

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
