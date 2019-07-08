import React from 'react'
import { hot } from 'react-hot-loader'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core'
import AuthProvider from 'contexts/auth'
import App from './app'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

console.log('theme:', theme)

function Root () {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />

          <BrowserRouter>
            <Route component={App} />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default hot(module)(Root)
