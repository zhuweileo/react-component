var path = require('path')
var htmlPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
module.exports = {
  entry: {
    index: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader",
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ]
      },
    ],
  },
  devServer: {
    hotOnly: true,
    open: true,
    port: 9090,
  },
  plugins: [
    new htmlPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
