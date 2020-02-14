import React from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo-react-zzaria.svg'

var config = {
  apiKey: 'AIzaSyADubq8Pf-_nC6cM52PGZJLAJ_yT4UkWto',
  authDomain: 'reactzzaria-12649.firebaseapp.com',
  databaseURL: 'https://reactzzaria-12649.firebaseio.com',
  projectId: 'reactzzaria-12649',
  storageBucket: 'reactzzaria-12649.appspot.com',
  messagingSenderId: '190402590347'
}

firebase.initializeApp(config)

const Login = () => (
  <Container>
    <Grid container justify='center' spacing={40}>
      <Grid item>
        <Logo />
      </Grid>

      <Grid item xs={12} container justify='center'>
        <GitHubButton>
          Entrar com GitHub
        </GitHubButton>
      </Grid>
    </Grid>
  </Container>
)

const Container = styled.div`
  padding: 20px;
`

const Logo = styled(MainLogo)`
  width: 100%;
`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 25px;
    max-width: 480px;
    padding: 15px;
    text-transform: none;
  }
`

export default Login
