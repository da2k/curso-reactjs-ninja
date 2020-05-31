import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import {
  AppBar,
  Toolbar as MaterialToolbar
} from '@material-ui/core'
import HeaderCommon from './header-common'
import HeaderCheckout from './header-checkout'
import { CHECKOUT } from 'routes'

const Header = () => (
  <AppBar>
    <Toolbar>
      <Switch>
        <Route path={CHECKOUT} component={HeaderCheckout} />
        <Route component={HeaderCommon} />
      </Switch>
    </Toolbar>
  </AppBar>
)

const Toolbar = styled(MaterialToolbar)`
  && {
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
    width: 100%;
  }
`

export default Header
