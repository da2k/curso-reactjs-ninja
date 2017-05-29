'use strict'

import React from 'react'
import Button from './index'
import renderer from 'react-test-renderer'

it('Should Button default to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null}>
      Click me
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button success to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null} kind='success'>
      Click me Success
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button success to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null} kind='danger'>
      Click me Danger
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
