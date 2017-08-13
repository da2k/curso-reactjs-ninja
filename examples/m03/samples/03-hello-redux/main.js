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

store.subscribe(() => {
  $counter.textContent = store.getState()
})
