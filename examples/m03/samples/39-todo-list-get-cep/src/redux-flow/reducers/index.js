'use strict'

import { combineReducers } from 'redux'
import address from './address'
import todos from './todos'
import visibilityFilter from './visibility-filter'

export default combineReducers({
  address,
  todos,
  visibilityFilter
})
