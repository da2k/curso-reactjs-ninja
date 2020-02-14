import { useContext } from 'react'
import { OrderContext } from 'contexts'

function useOrder () {
  return useContext(OrderContext)
}

export default useOrder
