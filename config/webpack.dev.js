const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    contentBase: paths.build,
    compress: true,
    hot: true,
    port: 8000,
  },
});
