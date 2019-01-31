var path = require('path')
var htmlPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
module.exports = {
  entry: {
    index: './demo/webpack/src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './demo/webpack/dist'),
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
      template: "./demo/webpack/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
