const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: './src/index.tsx',

  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
      'prop-types': 'proptypes/disabled'
    }
  },

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      },

      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'typings-for-css-modules-loader?modules&namedExport&camelCase&minimize'
        })
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new CheckerPlugin(),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      title: "Hello World!"
    })
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

