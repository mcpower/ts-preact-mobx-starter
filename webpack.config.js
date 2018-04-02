const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
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
