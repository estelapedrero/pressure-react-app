// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  devtool: 'cheap-module-eval-source-map',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: `bundle.js`,
    publicPath: '/assets/',
   },

   resolve: {
     extensions: ['.js', '.json'],
   },

   module: {
     rules: [
       {
         test: /\.js$/,
         use: 'babel-loader',
       },
       {
         test: /\.scss$/,
         exclude: /node_modules/,
         use: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           use: [
               {
               loader: 'css-loader',
               query: {
                 modules: true,
                 sourceMap: true,
                 importLoaders: 2,
                 localIdentName: '[name]__[local]___[hash:base64:5]'
               }
             },
             'sass-loader',
           ],
         }),
      },
     ],
   },

   devServer: {
     contentBase: path.resolve(__dirname, 'public'),
     port: 8080,
   },

   plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
   stats: {
    colors: true
   }
};
