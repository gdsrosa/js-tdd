const webpack = require('webpack');
const path = require('path');

module.exports = () => ({
  entry: './src/js-modules/app.js',
  output: {
    filename: 'build.js',
    path: path.resolve('dist'),
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  plugins: [new webpack.ProgressPlugin()],
  watch: true,
  optimization: {
    minimize: true,
  },
});
