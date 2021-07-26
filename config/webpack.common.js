const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
  entry: {
    app: paths.src,
  },
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  corejs: { version: 3, proposals: true },
                  useBuiltIns: 'usage',
                  shippedProposals: true,
                  targets: {
                    browsers: ['>= 1%, not dead'],
                  },
                },
              ],
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[contenthash].[ext]',
          },
        },
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-es6-boilerplate',
      template: paths.public + '/index.html',
      favicon: paths.public + '/favicon.ico',
      filename: 'index.html',
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.css', '.scss', 'sass'],
  },
};
