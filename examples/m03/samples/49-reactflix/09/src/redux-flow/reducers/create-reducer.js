'use strict'

const createReducer = (initialState, handleActions) => {
  if (typeof initialState === 'undefined') {
    throw new Error('initialState should not be undefined')
  }

  if (Object.prototype.toString.call(handleActions) !== '[object Object]') {
    throw new Error('createReducer expects the second argument as an object representing reducer')
  }

  return (state = initialState, action) =>
    handleActions.hasOwnProperty(action.type)
      ? handleActions[action.type](state, action)
      : state
}

export default createReducer
