import { useEffect, useState } from 'react'
import { db } from 'services/firebase'

function useCollection (collection) {
  const [data, setData] = useState(null)

  useEffect(() => {
    let mounted = true

    db.collection(collection).get().then(querySnapshot => {
      const docs = []

      querySnapshot.forEach(doc => {
        docs.push({
          id: doc.id,
          ...doc.data()
        })
      })

      if (mounted) {
        setData(docs)
      }
    })

    return () => {
      mounted = false
    }
  }, [collection])

  return data
}

export default useCollection
