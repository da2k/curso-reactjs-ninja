import { PureComponent } from 'react'

class ErrorBoundary extends PureComponent {
  state = { hasError: false }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  render () {
    return this.props.children(this.state.hasError)
  }
}

export default ErrorBoundary
