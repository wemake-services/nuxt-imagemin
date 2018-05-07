/**
 * Copyright (c) 2018-present, wemake.services
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

const ImageminPlugin = require('imagemin-webpack-plugin').default

function nuxtImageMin (options) {
  this.extendBuild((config) => {
    if (!this.options.dev) {
      config.plugins.push(new ImageminPlugin(options))
    }
  })
}

module.exports = nuxtImageMin
module.exports.meta = require('../package.json')
