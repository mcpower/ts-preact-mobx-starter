const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


module.exports = function (env) {
  return merge(common, {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: "./dist",
      hot: true
    },

    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],

    mode: "development"
  });
}
