import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import {
  Content,
  H4
} from 'ui'
import { useAuth } from 'hooks'

function CheckoutConfirmation () {
  const { userInfo } = useAuth()

  return (
    <Content>
      <Header>
        <H4>Oi {userInfo.user.firstName}!</H4>
        <Typography>
          Confere, por favor, se está tudo certo com o seu pedido antes de finalizar?
        </Typography>
      </Header>
    </Content>
  )
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  text-align: center;
`

export default CheckoutConfirmation
