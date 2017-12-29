'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import address from './index'
import { FETCHING, SUCCESS } from './actions'

it('should  action SUCCESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
    isFetching: true
  })

  const action = deepFreeze({
    type: SUCCESS,
    payload: {
      address: 'Avenida Presidente Kennedy - de 1632',
      city: 'Curitiba',
      code: '80610-010',
      district: 'Água Verde',
      state: 'PR',
      status: 1
    }
  })

  const after = {
    address: 'Avenida Presidente Kennedy - de 1632',
    city: 'Curitiba',
    code: '80610-010',
    district: 'Água Verde',
    state: 'PR',
    status: 1,
    isFetching: false
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
