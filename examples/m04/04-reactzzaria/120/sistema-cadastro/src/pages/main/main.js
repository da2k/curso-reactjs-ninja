import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <>
    <Suspense fallback='Loading...'>
      <Switch>
        <Route children={<h1>main</h1>} />
      </Switch>
    </Suspense>
  </>
)

export default Main
