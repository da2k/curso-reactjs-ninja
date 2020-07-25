import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <Route path='/sobre' component={Sobre} />
        <Link to='/sobre'>Sobre</Link>
      </div>
    </BrowserRouter>
  )
}

const Sobre = () => (
  <h1>Sobre</h1>
)

export default App
