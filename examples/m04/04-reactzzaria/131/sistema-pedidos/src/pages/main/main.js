import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import Header from './header'

import * as routes from 'routes'

const ChoosePizzaSize = React.lazy(
  () => import('pages/choose-pizza-size')
)

const ChoosePizzaFlavours = React.lazy(
  () => import('pages/choose-pizza-flavours')
)

const ChoosePizzaQuantity = React.lazy(
  () => import('pages/choose-pizza-quantity')
)

const Checkout = React.lazy(
  () => import('pages/checkout')
)

const CheckoutConfirmation = React.lazy(
  () => import('pages/checkout-confirmation')
)

const CheckoutSuccess = React.lazy(
  () => import('pages/checkout-success')
)

const Main = () => (
  <>
    <Header />

    <Spacer />

    <Suspense fallback='Loading...'>
      <Switch>
        <Route
          path={routes.HOME}
          exact
          component={ChoosePizzaSize}
        />
        <Route
          path={routes.CHOOSE_PIZZA_FLAVOURS}
          component={ChoosePizzaFlavours}
        />
        <Route
          path={routes.CHOOSE_PIZZA_QUANTITY}
          component={ChoosePizzaQuantity}
        />

        <Route
          path={routes.CHECKOUT}
          exact
          component={Checkout}
        />

        <Route
          path={routes.CHECKOUT_CONFIRMATION}
          component={CheckoutConfirmation}
        />

        <Route
          path={routes.CHECKOUT_SUCCESS}
          component={CheckoutSuccess}
        />
      </Switch>
    </Suspense>
  </>
)

const style = (theme) => ({
  main: theme.mixins.toolbar
})

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
))

export default Main
