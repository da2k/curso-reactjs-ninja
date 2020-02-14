import React from 'react'
import styled from 'styled-components'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { ReactComponent as MainLogo } from 'pages/login/logo-react-zzaria.svg'

const Main = () => (
  <AppBar>
    <Toolbar>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <Typography color='inherit'>
          Olá João =)
      </Typography>

      <IconButton color='inherit'>
        <AccountCircle />
      </IconButton>

      <Menu open={false}>
        <MenuItem>Sair</MenuItem>
      </Menu>
    </Toolbar>
  </AppBar>
)

const LogoContainer = styled.div`
  flex-grow: 1;
`

const Logo = styled(MainLogo)`
  height: 50px;
  width: 200px;

  & path {
    fill: #fff;
  }

  & line {
    stroke: #fff;
  }
`

export default Main
