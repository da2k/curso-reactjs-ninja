'use strict'

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Header from 'components/header'
import Footer from 'components/footer'
import VideosList from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'
import { headerHeight, footerHeight } from 'utils/constants'

import 'normalize.css'
import 'milligram'

const App = () => (
  <Container>
    <Header />

    <Main>
      <RegisterVideo />
      <VideoSingle />
      <VideosList />
    </Main>

    <Footer />
  </Container>
)

injectGlobal`
  html, body, div[data-js="app"] {
    height: 100%;
  }
`

const Container = styled.div`
  height: 100%;
`

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`

export default App
