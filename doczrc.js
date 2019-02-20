const merge = require('webpack-merge');

const webpackOverlay = {
  module:{
    rules:[
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          "css-loader",
          "sass-loader",
        ]
      },
    ]
  }
};

export default {
  modifyBundlerConfig: config => {
    return merge(config, webpackOverlay);
  },
};
