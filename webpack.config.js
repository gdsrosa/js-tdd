const webpack = require('webpack');
const path = require('path');

const nodeENV = process.env.NODE_ENV || 'production';

module.exports = () => ({
  mode: nodeENV,
  entry: './src/js-modules/app.js',
  output: {
    filename: 'build.js',
    path: path.resolve('dist'),
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeENV) },
    }),
    new webpack.LoaderOptionsPlugin({
      devTool: true,
    }),
  ],
  watch: true,
  optimization: {
    minimize: true,
  },
});
