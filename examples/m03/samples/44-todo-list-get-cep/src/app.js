'use strict'

import React from 'react'
import Form from 'components/form'
import TodosList from 'components/todos-list'
import Filter from 'components/filter'
import SearchCep from 'components/search-cep'

import 'milligram'

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around', padding: 30 }}>
    <div>
      <Form />
      <TodosList />
      <Filter />
    </div>

    <div>
      <SearchCep />
    </div>
  </div>
)

export default App
