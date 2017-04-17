const path = require('path');

// var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  }
  // plugins: [
  //       new webpack.optimize.UglifyJsPlugin({
  //           compress: {
  //               warnings: false
  //           }
  //       }),
  //       new UnminifiedWebpackPlugin()
  //   ]
}
