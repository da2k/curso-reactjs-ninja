'use strict'

import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import App from './app'

const renderApp = (NewApp) => {
  render(
    <AppContainer>
      <NewApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)


if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
