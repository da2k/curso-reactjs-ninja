import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  Button,
  Grid,
  Typography
} from '@material-ui/core'
import { TextField } from 'ui'
import { PIZZAS_SIZES } from 'routes'

function FormRegisterSize () {
  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant='h4'>
          Cadastrar novo tamanho
        </Typography>
      </Grid>

      <Grid item container xs={12} spacing={2} component='form'>
        <TextField
          label='Nome para esse tamanho. Ex: Pequena'
        />

        <TextField
          label='Diâmetro da pizza em cm'
        />

        <TextField
          label='Quantidade de fatias'
        />

        <TextField
          label='Quantidade de sabores'
        />

        <Grid item container justify='flex-end' spacing={2}>
          <Grid item>
            <Button variant='contained' component={Link} to={PIZZAS_SIZES}>
              Cancelar
            </Button>
          </Grid>

          <Grid item>
            <Button variant='contained' color='primary' type='submit'>
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(5)}px;
  }
`

export default FormRegisterSize
