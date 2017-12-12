'use strict'

import { SET_VISIBILITY_FILTER } from './actions'

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  payload: { filter }
})
