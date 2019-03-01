import React, { Fragment } from 'react'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as Logo } from './logo-react-zzaria.svg'

const Login = () => (
  <Fragment>
    <Grid container>
      <Grid item>
        <Logo />
      </Grid>

      <Grid item>
        <Button>Entrar com GitHub</Button>
      </Grid>
    </Grid>
  </Fragment>
)

export default Login
