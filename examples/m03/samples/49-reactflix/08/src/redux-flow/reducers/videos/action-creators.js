'use strict'

import { ADD_VIDEO } from './actions'

export const addVideo = ({ id, title }) => ({
  type: ADD_VIDEO,
  payload: { id, title }
})
