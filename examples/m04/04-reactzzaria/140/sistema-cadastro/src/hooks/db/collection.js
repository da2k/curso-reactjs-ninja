import { useEffect, useState, useCallback } from 'react'
import { db } from 'services/firebase'

function useCollection (collection) {
  const [data, setData] = useState(null)

  const add = useCallback((data) => {
    console.log('data add new', data)
    return db.collection(collection).add(data)
  }, [collection])

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

  return { data, add }
}

export default useCollection
