import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import * as serviceWorker from './serviceWorker'

import ErrorBoundary from './error'

ReactDOM.render(
  <ErrorBoundary>
    {(hasError) => (
      <Root hasError={hasError} />
    )}
  </ErrorBoundary>,
  document.getElementById('root')
)

serviceWorker.unregister()
