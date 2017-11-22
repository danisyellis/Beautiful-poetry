const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'poetion.js',
    chunkFilename: 'poetion.js'
  },
  module: {
    rules: [
      {
        exclude: [
          /node_modules/,
          /\.html$/,
          /\.(js|jsx)$/,
          /\.scss$/,
          /\.css$/,
          /\.json$/
        ],
        loader: 'url',
      }, {
      }, {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    port: 8081
  }
};
