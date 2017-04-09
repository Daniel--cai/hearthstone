const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    //path: resolve(__dirname, 'dist'),
    path: '/dist',
    publicPath: '/'
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader', ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?modules', ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        title: "Hearthstone",
        template: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), 
    new webpack.NoEmitOnErrorsPlugin() 
  ],
};