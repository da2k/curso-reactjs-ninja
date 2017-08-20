'use strict'

import counters from './index'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

it('counters should be a function', () => {
  expect(counters).to.be.a('function')
})

it('Should add a new counter', () => {
  const before = deepFreeze([])
  const action = deepFreeze({ type: 'ADD_COUNTER' })
  const after = [0]
  expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should add a new counter again', () => {
  const before = deepFreeze([0, 1])
  const action = deepFreeze({ type: 'ADD_COUNTER' })
  const after = [0, 1, 0]
  expect(counters(before, action)).to.be.deep.equal(after)
})
