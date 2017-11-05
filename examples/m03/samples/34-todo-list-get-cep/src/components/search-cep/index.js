'use strict'

import React, { PureComponent } from 'react'
import SearchCep from './search-cep'
import ajax from '@fdaciuk/ajax'

class SearchCepContainer extends PureComponent {
  async componentDidMount () {
    const response = await ajax().get('http://apps.widenet.com.br/busca-cep/api/cep.json', { code: '06233-030' })
    console.log(response)
  }

  render () {
    return (
      <SearchCep />
    )
  }
}

export default SearchCepContainer
