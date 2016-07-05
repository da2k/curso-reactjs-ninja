'use strict'

import React from 'react'

const Title = ({ name, lastname }) => (
  <h1>Olá {`${name} ${lastname}`}</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'Sem sobrenome'
}

export default Title
