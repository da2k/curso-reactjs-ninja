import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import * as serviceWorker from './serviceWorker'

import ErrorBoundary from './error'

ReactDOM.render(
  <ErrorBoundary>
    {(hasError) => (
      <App hasError={hasError} />
    )}
  </ErrorBoundary>,
  document.getElementById('root')
)

serviceWorker.unregister()
