'use strict'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
  }

  return state
}

const createStore = (reducer) => {
  let state
  let subscriptions = []

  const dispatch = (action) => {
    state = reducer(state, action)
    subscriptions.forEach((f) => f())
  }

  const subscribe = (func) => {
    subscriptions.push(func)
    return () => {
      subscriptions = subscriptions.filter((f) => f !== func)
    }
  }

  dispatch({})

  return {
    getState: () => state,
    dispatch,
    subscribe
  }
}

const store = createStore(counter)

const $counter = document.querySelector('[data-js="counter"]')
const $decrement = document.querySelector('[data-js="decrement"]')
const $increment = document.querySelector('[data-js="increment"]')

$decrement.addEventListener('click', decrement, false)
$increment.addEventListener('click', increment, false)

function decrement () {
  store.dispatch({ type: 'DECREMENT' })
}

function increment () {
  store.dispatch({ type: 'INCREMENT' })
}

function render () {
  $counter.textContent = store.getState()
}

const unsubscribe = store.subscribe(render)
render()

setTimeout(() => {
  console.log('unsubscribe')
  unsubscribe()
}, 5000)
