var vue = require('vue-loader')
const { VueLoaderPlugin } = require('vue-loader')
var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var projectRoot = path.resolve(__dirname, '../')
// var cssLoader = ExtractTextPlugin.extract('style-loader', 'css-loader')

module.exports = {
  entry: {
    'vue3-password-strength-meter': './src/index.js'
  },
  output: {
    filename: './dist/[name].js',
    library: 'Password',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    'zxcvbn': 'zxcvbn'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
            /node_modules/.test(file) &&
            !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    //make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ],
}

if (process.env.NODE_ENV === 'production') {

  delete module.exports.devtool
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new VueLoaderPlugin()
    // new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')),
  ]
}

// Removed in Vite migration. Use `npm run build` (vite build) to produce `dist/`.
module.exports = {}
