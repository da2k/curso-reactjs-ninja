'use strict'

import { combineReducers } from 'redux'
import videos from './videos'
import ui from './ui'

export default combineReducers({
  videos,
  ui
})
