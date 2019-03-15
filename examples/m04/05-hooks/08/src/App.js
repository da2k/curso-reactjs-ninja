import React, { useState, useEffect } from 'react'

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <CounterClass />
    <CounterFunction />
  </div>
)

class CounterClass extends React.PureComponent {
  state = {
    counter: 0,
    toggle: false
  }

  componentDidMount () {
    this.updateDocumentTitle()
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      console.log('componentDidUpdate')
      this.updateDocumentTitle()
    }
  }

  updateDocumentTitle () {
    document.title = `CounterClass: ${this.state.counter}`
  }

  render () {
    return (
      <>
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
        {this.state.toggle && <h1>Toggle</h1>}
        <button onClick={() => this.setState({
          toggle: !this.state.toggle
        })}>Toggle</button>
      </>
    )
  }
}

function CounterFunction () {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('componentDidMount')
    setInterval(() => {
      setCounter((counter) => counter + 1)
    }, 1000)
  }, [])

  useEffect(() => {
    document.title = `CounterFunction: ${counter}`
  }, [counter])

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
