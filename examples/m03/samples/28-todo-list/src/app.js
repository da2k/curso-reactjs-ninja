'use strict'

import React from 'react'
import Form from 'components/form'
import TodosList from 'components/todos-list'
import Filter from 'components/filter'

const App = () => (
  <div>
    <Form />
    <TodosList />
    <Filter />
  </div>
)

export default App
