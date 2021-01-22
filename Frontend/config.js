var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 
'./public/index.html' });
module.exports = {
  entry: './src/main.js',
  output: {
    filename: './public/assets/js/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  plugins: [HTMLWebpackPluginConfig]
};
