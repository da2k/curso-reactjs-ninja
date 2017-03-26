'use strict'

const webpack = require('webpack')
const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: common.entry,

  output: common.output,

  plugins: [
    new CleanPlugin(['dist'], {
      root: common.paths.root
    }),

    new ExtractTextPlugin({
      filename: '[name]-[hash].css'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'react-build',
      minChunks: ({ resource }) => (
        /node_modules\/react(-dom)?\//.test(resource)
      )
    }),

    new HtmlPlugin(common.htmlPluginConfig),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ],

  module: {
    rules: [
      common.standardPreLoader,
      common.jsLoader,
      common.fileLoader,
      common.urlLoader,
      Object.assign({}, common.cssLoader, {
        use: ExtractTextPlugin.extract({
          fallback: common.cssLoader.use[0],
          use: common.cssLoader.use.slice(1)
        })
      })
    ]
  },

  resolve: common.resolve
}
