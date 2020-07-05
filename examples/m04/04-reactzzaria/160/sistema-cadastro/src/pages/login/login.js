import React from 'react'
import styled from 'styled-components'
import { Button, Grid, Typography } from '@material-ui/core'
import { useAuth } from 'hooks'

function Login () {
  const { login } = useAuth()

  return (
    <Container>
      <Grid container justify='center' spacing={5}>
        <Grid item>
          <Title>React-zzaria</Title>
          <Description>sistema de cadastros</Description>
        </Grid>

        <Grid item xs={12} container justify='center'>
          <GitHubButton onClick={login}>
            Entrar com GitHub
          </GitHubButton>
        </Grid>
      </Grid>
    </Container>
  )
}

const Title = styled(Typography).attrs({
  variant: 'h2'
})`
  && {
    font-weight: bold;
    text-align: center;
    position: relative;

    &::after {
      border-bottom: 1px solid #000;
      bottom: -13px;
      content: '';
      left: 0;
      position: absolute;
      width: 150px;
    }
  }
`

const Description = styled(Typography)`
  && {
    text-align: right;
  }
`

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(3)}px;
`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
    max-width: 480px;
    padding: ${({ theme }) => theme.spacing(2)}px;
    text-transform: none;
  }
`

export default Login
