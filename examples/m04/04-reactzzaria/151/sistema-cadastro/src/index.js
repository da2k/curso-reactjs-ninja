import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
