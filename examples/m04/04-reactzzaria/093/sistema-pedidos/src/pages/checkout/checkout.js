import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  Button,
  Grid,
  List,
  ListItem,
  Paper,
  TextField as MaterialTextField,
  Typography
} from '@material-ui/core'
import {
  Content,
  Footer,
  Title as UiTitle
} from 'ui'
import { useOrder } from 'hooks'
import { singularOrPlural } from 'utils'
import { CHECKOUT_CONFIRMATION } from 'routes'

function Checkout () {
  const { order } = useOrder()
  console.log('order:', order)

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
              <List>
                {order.pizzas.map((pizza, index) => {
                  const { pizzaFlavours, pizzaSize, quantity } = pizza
                  const { name, slices, flavours } = pizzaSize

                  return (
                    <ListItem key={index}>
                      <Typography>
                        <b>{quantity}</b> {' '}
                        {singularOrPlural(quantity, 'pizza', 'pizzas')} {' '}
                        <b>{name.toUpperCase()}</b> {'- '}
                        ({slices} {singularOrPlural(slices, 'fatia', 'fatias')}, {' '}
                        {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')})

                        <br />

                        {singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores')}{' '}
                        <b>{pizzaFlavours.map(({ name }) => name).join(', ')}</b>
                      </Typography>
                    </ListItem>
                  )
                })}
              </List>
            </PaperContainer>
          </Grid>
        </Grid>
      </Content>

      <Footer>
        <FooterContent>
          <Button
            variant='contained'
            color='primary'
            component={Link}
            to={CHECKOUT_CONFIRMATION}
          >
            Confirmar dados
          </Button>
        </FooterContent>
      </Footer>
    </>
  )
}

const FooterContent = styled.div`
  display: flex;
  justify-content: flex-end;
`

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
