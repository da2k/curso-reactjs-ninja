import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  Button,
  Grid,
  Paper,
  TextField as MaterialTextField
} from '@material-ui/core'
import {
  Content,
  OrderInfo,
  Title as UiTitle
} from 'ui'
import { CHECKOUT_CONFIRMATION } from 'routes'
import FooterCheckout from 'pages/checkout/footer-checkout'

function Checkout () {
  return (
    <>
      <Content>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Title>Qual o endereço para entrega?</Title>
            <PaperContainer>
              <Grid container spacing={2}>
                <TextField label='CEP' xs={4} autoFocus />
                <Grid item xs={8} />

                <TextField label='Rua' xs={9} />
                <TextField label='Número' xs={3} />
                <TextField label='Complemento' xs={12} />
                <TextField label='Cidade' xs={9} />
                <TextField label='Estado' xs={3} />
              </Grid>
            </PaperContainer>

            <Title>Qual o seu telefone?</Title>
            <PaperContainer>
              <TextField label='Telefone' xs={4} />
            </PaperContainer>
          </Grid>

          <Grid container item xs={12} md={6} direction='column'>
            <Title>Informações do seu pedido:</Title>
            <PaperContainer>
              <OrderInfo showOptions />
            </PaperContainer>
          </Grid>
        </Grid>
      </Content>

      <FooterCheckout>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          to={CHECKOUT_CONFIRMATION}
        >
          Confirmar dados
        </Button>
      </FooterCheckout>
    </>
  )
}

function TextField ({ xs, autoFocus, ...props }) {
  return (
    <Grid item xs={xs}>
      <MaterialTextField
        fullWidth
        variant='outlined'
        inputProps={{
          autoFocus
        }}
        {...props}
      />
    </Grid>
  )
}

TextField.propTypes = {
  autoFocus: t.bool,
  xs: t.number
}

const Title = styled(UiTitle).attrs({
  variant: 'h6'
})`
  && {
    text-align: left;
  }
`

const PaperContainer = styled(Paper)`
  && {
    flex-grow: 1;
    margin-bottom: ${({ theme }) => theme.spacing(5)}px;
    padding: ${({ theme }) => theme.spacing(2)}px;
  }
`

export default Checkout
