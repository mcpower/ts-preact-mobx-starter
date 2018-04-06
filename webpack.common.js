const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");


module.exports = {
  entry: './src/index.tsx',

  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: [ '.tsx', '.ts', '.js', '.jsx' ]
      })
    ],
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
        loader: 'ts-loader',
        options: {
          // will be checked in dev with fork plugin
          transpileOnly: true
        },
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
    new CleanWebpackPlugin(["build/*.*"]),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      title: "Hello World!"
    })
  ],

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  }
};

