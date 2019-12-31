import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  Card,
  Grid,
  Typography
} from '@material-ui/core'
import {
  CardLink,
  Content,
  Divider,
  H3,
  H4,
  PizzasGrid
} from 'ui'
import { singularOrPlural } from 'utils'
import { useAuth } from 'hooks'

import { CHOOSE_PIZZA_FLAVOURS } from 'routes'
import { db } from 'services/firebase'

const ChoosePizzaSize = () => {
  const { userInfo } = useAuth()
  const [pizzasSizes, setPizzasSizes] = useState([])

  useEffect(() => {
    db.collection('pizzasSizes').get().then(querySnapshot => {
      let sizes = []

      querySnapshot.forEach(doc => {
        sizes.push({
          id: doc.id,
          ...doc.data()
        })
      })

      setPizzasSizes(sizes)
    })
  }, [])

  return (
    <Content>
      <Grid container direction='column' alignItems='center'>
        <H3>
          O que vai ser hoje, {userInfo.user.firstName}? =)
        </H3>

        <H4>
          Escolha o tamanho da pizza:
        </H4>
      </Grid>

      <PizzasGrid>
        {pizzasSizes.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card>
              <CardLink to={{
                pathname: CHOOSE_PIZZA_FLAVOURS,
                state: {
                  pizzaSize: pizza
                }
              }}>
                <Pizza>
                  <PizzaText>{pizza.size}cm</PizzaText>
                </Pizza>

                <Divider />

                <Typography variant='h5'>{pizza.name}</Typography>
                <Typography>
                  {pizza.slices} fatias, {' '}
                  {pizza.flavours} {' '}
                  {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
                </Typography>
              </CardLink>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </Content>
  )
}

const Pizza = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.grey.A100};
  border-radius: 50%;
  display: flex;
  height: 200px;
  justify-content: center;
  position: relative;
  width: 200px;
  z-index: 1;

  &::before,
  &::after {
    background: ${({ theme }) => theme.palette.grey.A100};
    content: '';
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    height: 1px;
    width: 160px;
  }

  &::after {
    height: 160px;
    width: 1px;
  }
`

const PizzaText = styled(Typography).attrs({
  variant: 'h5'
})`
  && {
    align-items: center;
    background: ${({ theme }) => theme.palette.common.white};
    border-radius: 50%;
    display: flex;
    height: 80px;
    justify-content: center;
    position: relative;
    width: 80px;
    z-index: 1;
  }
`

export default ChoosePizzaSize
