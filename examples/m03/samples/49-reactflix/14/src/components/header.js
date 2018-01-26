'use strict'

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { headerHeight } from 'utils/constants'
import { openRegisterVideo } from 'reducers/ui/action-creators'

const MainHeader = ({ onOpenRegisterVideo }) => (
  <Header>
    <HeaderTitle>Reactflix</HeaderTitle>
    <RegisterButton onClick={onOpenRegisterVideo}>Cadastrar vídeo</RegisterButton>
  </Header>
)

const Header = styled.header`
  align-items: center;
  background: #333;
  display: flex;
  height: ${headerHeight};
  justify-content: space-between;
  padding: 0 10px;
`

const HeaderTitle = styled.h1`
  color: #fff;
  margin-bottom: 0;
`

const RegisterButton = styled.button`
  margin-bottom: 0;
`

const mapDispatchToProps = (dispatch) => ({
  onOpenRegisterVideo: () => dispatch(openRegisterVideo())
})

export default connect(null, mapDispatchToProps)(MainHeader)
