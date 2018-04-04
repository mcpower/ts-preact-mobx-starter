const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");


module.exports = function (env) {
  return merge(common, {
    devtool: 'source-map',

    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
                // https://github.com/developit/preact/issues/961
                reduce_vars: false
            }
          },
          sourceMap: true
        })
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ],

    mode: "production"
  });
}
