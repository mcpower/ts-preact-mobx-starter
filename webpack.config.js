const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: './src/index.ts',

  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx' ]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new CheckerPlugin()
  ],
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
