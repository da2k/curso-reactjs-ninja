'use strict'

import React, { PureComponent } from 'react'
import SearchCep from './search-cep'
import ajax from '@fdaciuk/ajax'

class SearchCepContainer extends PureComponent {
  state = {
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const cep = e.target.cep.value
    const response = await ajax().get('http://apps.widenet.com.br/busca-cep/api/cep.json', { code: cep })
    console.log(response)
    this.setState(response)
  }

  render () {
    return (
      <SearchCep
        {...this.state}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SearchCepContainer
