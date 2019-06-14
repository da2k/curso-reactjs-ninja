import React from 'react'
import t from 'prop-types'
import { Redirect } from 'react-router-dom'
import { H4, HeaderContent } from 'ui'
import { singularOrPlural } from 'utils'
import { HOME } from 'routes'

const ChoosePizzaFlavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours } = location.state

  return (
    <>
      <HeaderContent>
        <H4>
          Escolha até {flavours} {' '}
          {singularOrPlural(flavours, 'sabor', 'sabores')}:
        </H4>
      </HeaderContent>
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
