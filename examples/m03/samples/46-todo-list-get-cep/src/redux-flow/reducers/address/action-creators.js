'use strict'

import { UPDATE_ADDRESS } from './actions'

export const updateAddress = (data) => ({
  type: UPDATE_ADDRESS,
  payload: data
})
