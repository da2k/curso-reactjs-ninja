import React, { createContext } from 'react'
import t from 'prop-types'

const OrderContext = createContext()

function OrderProvider ({ children }) {
  function addPizzaToOrder (pizza) {
    console.log('order pizza:', pizza)
  }

  return (
    <OrderContext.Provider value={{
      addPizzaToOrder
    }}>
      {children}
    </OrderContext.Provider>
  )
}

OrderProvider.propTypes = {
  children: t.node.isRequired
}

export { OrderProvider, OrderContext }
