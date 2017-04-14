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
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: 'eval',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader', ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader?module', 'sass-loader']
            
      },
      {
        test: /\.(png|jpg)$/,
        use: 'file-loader',
        include: resolve(__dirname, 'src')
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        title: "Hearthstone",
        template: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), 
    new webpack.NoEmitOnErrorsPlugin(),

  ],

  resolve: {
    alias: {
      'images': resolve(__dirname, 'src/assets'),
      'components': resolve(__dirname, 'src/components'),
      'containers': resolve(__dirname, 'src/containers'),
      'actions': resolve(__dirname, 'src/actions'),
      'reducers': resolve(__dirname, 'src/reducers'),
    }
  }
};