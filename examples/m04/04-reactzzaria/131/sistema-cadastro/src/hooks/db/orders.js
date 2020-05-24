import { useEffect, useState } from 'react'
import { db } from 'services/firebase'

function useOrders () {
  const [orders, setOrders] = useState(null)

  useEffect(() => {
    db.collection('orders').get().then(querySnapshot => {
      const docs = []

      querySnapshot.forEach(doc => {
        docs.push({
          id: doc.id,
          ...doc.data()
        })
      })

      setOrders(docs)
    })
  }, [])

  return { orders }
}

export default useOrders
