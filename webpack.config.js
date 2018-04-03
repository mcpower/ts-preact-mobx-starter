const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function (env) {
  return {
    entry: './src/index.tsx',

    resolve: {
      extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
      alias: {
        'react': 'preact-compat',
        'react-dom': 'preact-compat',
      }
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'awesome-typescript-loader',
          exclude: /node_modules/
        },

        {
          test: /\.css$/,
          include: [
            path.resolve(__dirname, "src")
          ],
          use: [
            'style-loader',
            'typings-for-css-modules-loader?modules&namedExport&camelCase&minimize'
          ]
        }
      ]
    },

    plugins: [
      new CheckerPlugin(),
      new HtmlWebpackPlugin({
        title: "Hello World!"
      })
    ],

    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
                // https://github.com/developit/preact/issues/961
                reduce_vars: false
            }
          },
        })
      ]
    },

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
}
