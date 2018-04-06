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
                reduce_vars: false,
                // properties: true,
                keep_fargs: false,
                pure_getters: true,
                // collapse_vars: true,
                // warnings: false,
                // ie8: false,
                // sequences: true,
                // dead_code: true,
                // drop_debugger: true,
                // comparisons: true,
                // conditionals: true,
                evaluate: true,
                // booleans: true,
                // loops: true,
                // unused: true,
                hoist_funs: true,
                // if_return: true,
                // join_vars: true,
                // drop_console: false,
                pure_funcs: [
                  'classCallCheck',
                  '_classCallCheck',
                  '_possibleConstructorReturn',
                  'Object.freeze',
                  'invariant',
                  'warning'
                ]
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

    node: false,

    mode: "production"
  });
}
