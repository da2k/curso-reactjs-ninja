import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import {
  IconButton,
  List,
  ListItem as MaterialListItem,
  Typography
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { useOrder } from 'hooks'
import { singularOrPlural } from 'utils'

function OrderInfo ({ showOptions }) {
  const { order, removePizzaFromOrder } = useOrder()
  console.log('order:', order)

  return (
    <List>
      {order.pizzas.map((pizza) => {
        const { pizzaFlavours, pizzaSize, quantity } = pizza
        const { name, slices, flavours } = pizzaSize

        return (
          <ListItem key={pizza.id}>
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

            {showOptions && (
              <IconButton
                title='Remover'
                color='secondary'
                onClick={() => removePizzaFromOrder(pizza.id)}
              >
                <Close />
              </IconButton>
            )}
          </ListItem>
        )
      })}
    </List>
  )
}

OrderInfo.propTypes = {
  showOptions: t.bool
}

const ListItem = styled(MaterialListItem)`
  && {
    display: flex;
    justify-content: space-between;
  }
`

export default OrderInfo
