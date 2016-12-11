'use strict'

const path = require('path')
const common = require('../webpack/common')
const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = function (config, env) {
  const newConfig = webpackConfig(config, env)

  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat(common.standardPreLoader)
  newConfig.resolve = common.resolve

  return newConfig
}
