import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import { Container } from '@material-ui/core'

const Content = ({ children, ...props }) => (
  <Main {...props}>
    <Container>
      {children}
    </Container>
  </Main>
)

Content.propTypes = {
  children: t.node.isRequired
}

const Main = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(3)}px;
`

export default Content
