const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/A018-webpack/A018-webpack.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig-frontend.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend/assets/js'),
  },
  devtool: 'source-map',
};
