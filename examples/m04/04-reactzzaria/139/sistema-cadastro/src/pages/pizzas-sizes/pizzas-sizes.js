import React from 'react'
import { Route } from 'react-router-dom'
import TablePizzasSizes from './table'
import FormRegisterSize from './form'
import { PIZZAS_SIZES, NEW } from 'routes'

function PizzasSizes () {
  return (
    <>
      <Route path={`${PIZZAS_SIZES}${NEW}`}>
        <FormRegisterSize />
      </Route>
      <TablePizzasSizes />
    </>
  )
}

export default PizzasSizes
