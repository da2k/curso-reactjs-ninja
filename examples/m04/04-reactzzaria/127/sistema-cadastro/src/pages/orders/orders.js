import React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core'

function Orders () {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>
                Informações do pedido
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>
              <div>
                <Typography variant='button'>
                  Horário do pedido: 10:20h
                </Typography>
              </div>

              <div>
                <Typography variant='button'>
                  Pedido:
                </Typography>

                <ul>
                  <li>
                    <Typography>
                      1 pizza MÉDIA de {' '}
                      Frango com Catupiry e Calabresa
                    </Typography>
                  </li>
                </ul>
              </div>

              <div>
                <Typography variant='button'>
                  Endereço de entrega:
                </Typography>

                <Typography>
                  Rua Tal, nº 92, {' '}
                  ap 10<br />
                  Bairro: São Januário - CEP: 81828-233<br />
                  São Paulo / SP
                </Typography>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Orders
