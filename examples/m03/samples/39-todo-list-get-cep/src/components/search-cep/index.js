'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ajax from '@fdaciuk/ajax'
import SearchCep from './search-cep'
import { updateAddress } from 'reducers/address/action-creators'

class SearchCepContainer extends PureComponent {
  state = { isFetching: false }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ isFetching: true })

    const cep = e.target.cep.value
    const response = await ajax().get('http://apps.widenet.com.br/busca-cep/api/cep.json', { code: cep })

    this.setState({ isFetching: false })
    this.props.dispatch(updateAddress(response))
  }

  render () {
    return (
      <SearchCep
        {...this.state}
        {...this.props.address}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  address: state.address
})

export default connect(mapStateToProps)(SearchCepContainer)
