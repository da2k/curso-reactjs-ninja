'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchAddress } from 'reducers/address/action-creators'

export const SearchCep = ({
  address,
  city,
  code,
  district,
  state,
  status,
  isFetching,
  handleSubmit
}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input type='text' name='cep' />
      <button type='submit' disabled={isFetching}>
        {isFetching ? 'Buscando...' : 'Buscar endereço'}
      </button>
    </form>

    {status === 0 && <div>CEP não encontrado</div>}

    {status === 1 && (
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
    )}
  </div>
)

const mapStateToProps = (state) => state.address

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(fetchAddress(e.target.cep.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCep)
