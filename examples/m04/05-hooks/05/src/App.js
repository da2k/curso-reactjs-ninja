import React, { useState, useEffect } from 'react'

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <CounterClass />
    <CounterFunction />
  </div>
)

class CounterClass extends React.PureComponent {
  state = {
    counter: 0
  }

  componentDidMount () {
    this.updateDocumentTitle()
  }

  componentDidUpdate () {
    this.updateDocumentTitle()
  }

  updateDocumentTitle () {
    document.title = `CounterClass: ${this.state.counter}`
  }

  render () {
    return (
      <Counter
        counter={this.state.counter}
        increment={() => {
          this.setState((prevState) => ({
            counter: prevState.counter + 1
          }))
        }}

        decrement={() => {
          this.setState((prevState) => ({
            counter: prevState.counter - 1
          }))
        }}
      />
    )
  }
}

function CounterFunction () {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    document.title = `CounterFunction: ${counter}`
  })

  return (
    <Counter
      counter={counter}
      increment={() => {
        setCounter(counter => counter + 1)
      }}

      decrement={() => {
        setCounter(counter => counter - 1)
      }}
    />
  )
}

const Counter = ({ counter, increment, decrement }) => (
  <div style={{ textAlign: 'center' }}>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
)

export default App
