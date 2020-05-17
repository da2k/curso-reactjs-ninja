import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import {
  Divider,
  Drawer as MaterialDrawer,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core'

const Main = () => (
  <>
    <Drawer variant='permanent'>
      <DrawerContent>
        <Typography variant='h4'>
          React-zzaria
        </Typography>

        <Typography>
          (sistema de cadastro)
        </Typography>
      </DrawerContent>

      <Divider />

      <List>
        {menuItems.map(item => (
          <ListItem key={item.label} button>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>

    <Content>
      <Suspense fallback='Loading...'>
        <Switch>
          <Route children={<h1>main</h1>} />
        </Switch>
      </Suspense>
    </Content>
  </>
)

const menuItems = [
  {
    label: 'Pedidos'
  },

  {
    label: 'Tamanhos de pizzas'
  },

  {
    label: 'Sabores de pizzas'
  }
]

const Drawer = styled(MaterialDrawer)`
  && {
    .MuiPaper-root {
      width: ${({ theme }) => theme.extend.drawerWidth}px;
    }
  }
`

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(1)}px;
  text-align: center;
`

const Content = styled.main`
  margin-left: ${({ theme }) => theme.extend.drawerWidth}px;
  padding: ${({ theme }) => theme.spacing(3)}px;
`

export default Main
