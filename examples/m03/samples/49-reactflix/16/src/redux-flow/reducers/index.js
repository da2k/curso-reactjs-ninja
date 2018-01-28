'use strict'

import { combineReducers } from 'redux'
import ui from './ui'
import videos from './videos'
import videoSingle from './video-single'

export default combineReducers({
  ui,
  videos,
  videoSingle
})
