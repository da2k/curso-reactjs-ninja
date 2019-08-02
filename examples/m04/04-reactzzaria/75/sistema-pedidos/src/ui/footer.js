import React from 'react'
import t from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Button as MaterialButton,
  Container,
  Grid,
  Typography
} from '@material-ui/core'
import { useAuth } from 'hooks'
import { singularOrPlural } from 'utils'
import { HOME, CHOOSE_PIZZA_QUANTITY } from 'routes'

function Footer ({ location }) {
  const { userInfo } = useAuth()

  const { flavours, name, slices } = location.state

  return (
    <FooterContent>
      <Container>
        <Grid container>
          <OrderContainer>
            <Typography>
              <b>{userInfo.user.firstName}, seu pedido é:</b>
            </Typography>

            <Typography>
              Pizza <b>{name.toUpperCase()}</b> {'- '}
              ({slices} {singularOrPlural(slices, 'fatia', 'fatias')}, {' '}
              {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')})
            </Typography>
          </OrderContainer>

          <Grid item>
            <Button to={HOME}>Mudar tamanho</Button>
            <Button to={CHOOSE_PIZZA_QUANTITY} color='primary'>
              Quantas pizzas?
            </Button>
          </Grid>
        </Grid>
      </Container>
    </FooterContent>
  )
}

Footer.propTypes = {
  location: t.object.isRequired
}

const FooterContent = styled.footer`
  box-shadow: 0 0 3px ${({ theme }) => theme.palette.grey[400]};
  padding: ${({ theme }) => theme.spacing(3)}px;
  width: 100%;
`

const OrderContainer = styled(Grid).attrs({
  item: true
})`
  && {
    flex-grow: 1;
  }
`

const Button = styled(MaterialButton).attrs({
  component: Link,
  variant: 'contained'
})`
  && {
    margin-left: ${({ theme }) => theme.spacing(2)}px;
  }
`

export default withRouter(Footer)
