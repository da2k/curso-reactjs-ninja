import React from 'react'
import styled from 'styled-components'
import Logo from './logo'

function HeaderCheckout () {
  return (
    <LogoContainer>
      <Logo />
    </LogoContainer>
  )
}

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`

export default HeaderCheckout
