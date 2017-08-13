'use strict'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
  }

  return state
}

const { createStore } = Redux
const store = createStore(counter)

store.subscribe(() => {
  console.log('disparou uma ação!', store.getState())
})

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
