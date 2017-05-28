'use strict'

const respostaQueVemDoServidor = () => [
  'javascript',
  'react',
  'node'
]

it('Test snapshot', () => {
  expect(respostaQueVemDoServidor()).toMatchSnapshot()
})
