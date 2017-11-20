const path = require('path');

const config = {
  entry: './src/client/index.js',
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ]
  },
  output: {
    filename: "poetion.js",
    publicPath: '/',
    path: path.join(__dirname, 'build')
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    port: 8081
  },
}

module.exports = config;
