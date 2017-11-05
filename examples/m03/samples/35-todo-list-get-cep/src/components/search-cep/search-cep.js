'use strict'

import React from 'react'

const SearchCep = ({
  address,
  city,
  code,
  district,
  state,
  status,
  handleSubmit
}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input type='text' name='cep' />
      <button type='submit'>Buscar endereço</button>
    </form>

    <table>
      <thead>
        <tr>
          <td>CEP</td>
          <td>Endereço</td>
          <td>Bairro</td>
          <td>Cidade</td>
          <td>Estado</td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{code}</td>
          <td>{address}</td>
          <td>{district}</td>
          <td>{city}</td>
          <td>{state}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default SearchCep
