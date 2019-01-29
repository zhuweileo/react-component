var path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: 'zwReactCom',
    libraryTarget: 'umd',
  },
  mode: 'production',
  externals:{
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React' // indicates global variable
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader",
        }
      }
    ]
  }
}
