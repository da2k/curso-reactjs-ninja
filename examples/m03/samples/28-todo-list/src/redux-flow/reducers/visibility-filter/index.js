'use strict'

import { SET_VISIBILITY_FILTER, SHOW_ALL } from './actions'

export const initialState = SHOW_ALL

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter
  }
  return state
}

export default visibilityFilter
