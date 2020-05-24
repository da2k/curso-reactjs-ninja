import React from 'react'
import styled from 'styled-components'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer as MaterialTableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core'

import { useOrders } from 'hooks'

import { singularOrPlural } from 'utils'

function Orders () {
  const { orders } = useOrders()
  console.log('orders:', orders)

  function getHour (date) {
    const options = {
      hour: 'numeric',
      minute: 'numeric'
    }

    return Intl.DateTimeFormat('pt-BR', options).format(date)
  }

  return allOrderStatus.map(orderStatus => (
    <TableContainer key={orderStatus.title}>
      <TableTitle>
        {orderStatus.title}
      </TableTitle>
      <Table>
        <THead>
          <TableRow>
            <Th>
              <Typography>
                Informações do pedido
              </Typography>
            </Th>
          </TableRow>
        </THead>

        <TableBody>
          {orders?.map(order => (
            <TableRow key={order.id}>
              <TableCell>
                <div>
                  <Subtitle>
                    Horário do pedido: {getHour(order.createdAt.toDate())}
                  </Subtitle>
                </div>

                <div>
                  <Subtitle>
                    Pedido:
                  </Subtitle>

                  <ul>
                    {order.pizzas.map((pizza, index) => (
                      <li key={index}>
                        <Typography>
                          {pizza.quantity} {' '}
                          {singularOrPlural(
                            pizza.quantity,
                            'pizza',
                            'pizzas'
                          )}{' '}
                          {pizza.size.name.toUpperCase()} de {' '}
                          {pizza.flavours
                            .map(flavour => flavour.name)
                            .reduce((acc, flavour, index, array) => {
                              if (index === 0) {
                                return flavour
                              }

                              if (index === array.length - 1) {
                                return `${acc} e ${flavour}`
                              }

                              return `${acc}, ${flavour}`
                            }, '')}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Subtitle>
                    Endereço de entrega:
                  </Subtitle>

                  <Typography>
                    Rua Tal, nº 92, {' '}
                    ap 10<br />
                    Bairro: São Januário - CEP: 81828-233<br />
                    São Paulo / SP
                  </Typography>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ))
}

const allOrderStatus = [
  {
    title: 'Pedidos pendentes'
  },

  {
    title: 'Pedidos em produção'
  },

  {
    title: 'Saiu para entrega'
  },

  {
    title: 'Pedidos finalizados'
  }
]

const TableContainer = styled(MaterialTableContainer).attrs({
  component: Paper
})`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  }
`

const TableTitle = styled(Typography).attrs({
  variant: 'h6'
})`
  && {
    padding: ${({ theme }) => theme.spacing(3)}px;
  }
`

const Subtitle = styled(Typography).attrs({
  variant: 'button'
})`
  && {
    font-weight: bold;
  }
`

const THead = styled(TableHead)`
  && {
    background: ${({ theme }) => theme.palette.common.black};
  }
`

const Th = styled(TableCell)`
  && {
    color: ${({ theme }) => theme.palette.common.white};
  }
`

export default Orders
