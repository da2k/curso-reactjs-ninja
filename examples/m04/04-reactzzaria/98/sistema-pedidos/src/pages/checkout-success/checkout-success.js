import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Button,
  Container,
  Divider as MaterialDivider,
  Paper,
  Typography
} from '@material-ui/core'
import {
  Content,
  H4,
  H6,
  OrderInfo
} from 'ui'
import FooterCheckout from 'pages/checkout/footer-checkout'
import { useAuth } from 'hooks'
import { HOME } from 'routes'

function CheckoutSuccess () {
  const { userInfo } = useAuth()

  return (
    <>
      <Content>
        <Header>
          <H4>Prontinho {userInfo.user.firstName}!</H4>

          <Typography>
            Seu pedido será entregue no endereço abaixo em até
          </Typography>

          <H6>
            40 minutos =)
          </H6>
        </Header>

        <Container maxWidth='sm'>
          <PaperContainer>
            <H6>Seu pedido:</H6>
            <OrderInfo />

            <Divider />

            <H6>Endereço para entrega:</H6>
            <Typography>
              Rua tal, 10, Compl., Bairro, CEP: 10100-10 - Cidade/UF
            </Typography>

            <Divider />

            <H6>Telefone para contato:</H6>
            <Typography>
              (44) 98888-7777
            </Typography>
          </PaperContainer>
        </Container>
      </Content>

      <FooterCheckout justifyContent='center'>
        <Button
          color='secondary'
          size='large'
          component={Link}
          to={HOME}
        >
          {'<'} Voltar para a Página Inicial
        </Button>
      </FooterCheckout>
    </>
  )
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  text-align: center;
`

const PaperContainer = styled(Paper)`
  && {
    padding: ${({ theme }) => theme.spacing(3)}px;
  }
`

const Divider = styled(MaterialDivider)`
  && {
    margin: ${({ theme }) => theme.spacing(3, 0)};
  }
`

export default CheckoutSuccess
