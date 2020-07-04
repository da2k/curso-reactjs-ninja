import React from 'react'
import { Route } from 'react-router-dom'
import TablePizzasSizes from './table'
import FormRegisterSize from './form'
import { PIZZAS_SIZES, NEW, EDIT } from 'routes'

const newSizePath = `${PIZZAS_SIZES}${NEW}`
const editSizePath = `${PIZZAS_SIZES}${EDIT()}`

function PizzasSizes () {
  return (
    <>
      <Route path={[newSizePath, editSizePath]}>
        <FormRegisterSize />
      </Route>
      <TablePizzasSizes />
    </>
  )
}

export default PizzasSizes
