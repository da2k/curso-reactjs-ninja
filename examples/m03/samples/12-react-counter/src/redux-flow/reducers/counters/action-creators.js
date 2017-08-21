'use strict'
import { ADD_COUNTER, REMOVE_COUNTER, INCREMENT, DECREMENT } from './actions'

export const addCounter = () => ({ type: ADD_COUNTER })
export const removeCounter = (index) => ({ type: REMOVE_COUNTER, index })
export const increment = (index) => ({ type: INCREMENT, index })
export const decrement = (index) => ({ type: DECREMENT, index })
