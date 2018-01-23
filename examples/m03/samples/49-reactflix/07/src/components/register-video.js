'use strict'

import React from 'react'
import styled from 'styled-components'

const RegisterVideo = () => (
  <Form>
    <h2>Cadastrar vídeo</h2>

    <label htmlFor='id'>ID do vídeo:</label>
    <input type='text' id='id' name='id' />

    <label htmlFor='title'>Título do vídeo:</label>
    <input type='text' id='title' name='title' />

    <button type='submit'>Cadastrar</button>
  </Form>
)

const Form = styled.form`
  padding: 10px;
`

export default RegisterVideo
