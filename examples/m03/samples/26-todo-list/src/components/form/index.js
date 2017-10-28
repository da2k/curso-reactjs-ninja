'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from 'reducers/todos/action-creators'

const Form = ({ handleAddTodo }) => (
  <form onSubmit={handleAddTodo}>
    <input type='text' name='todo' />
    <button type='submit'>Adicionar</button>
  </form>
)

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value))
    e.target.todo.value = ''
  }
})

export default connect(null, mapDispatchToProps)(Form)
