const { resolve } = require('path');

module.exports = {

  context: resolve('src'),

  entry: {
    app: './index.js'
  },

  output: {
    filename: '[name].js',
    path: resolve('dist')
  },

  // Add the loader for .jsx files.
  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
