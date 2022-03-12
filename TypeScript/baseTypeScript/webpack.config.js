const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/A018-webpack/A018-webpack.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/assets/js'),
  },
  devtool: 'source-map',
};
