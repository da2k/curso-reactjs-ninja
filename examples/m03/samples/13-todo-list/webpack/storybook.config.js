'use strict'

const common = require('./common')
const webpackConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js')

module.exports = (config, env) => {
  const newConfig = webpackConfig(config, env)

  newConfig.module.rules.push(common.standardPreLoader)
  newConfig.resolve = common.resolve

  return newConfig
}
