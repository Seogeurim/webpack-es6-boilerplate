const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    contentBase: paths.build,
    compress: true,
    hot: true,
    port: 8000,
  },
});
