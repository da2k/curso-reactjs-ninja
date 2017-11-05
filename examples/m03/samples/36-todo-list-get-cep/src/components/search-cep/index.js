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
    status: 1,
    isFetching: false
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ isFetching: true })

    const cep = e.target.cep.value
    const response = await ajax().get('http://apps.widenet.com.br/busca-cep/api/cep.json', { code: cep })

    setTimeout(() => {
      this.setState({ isFetching: false })
      console.log(response)
      this.setState(response)
    }, 5000)
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
