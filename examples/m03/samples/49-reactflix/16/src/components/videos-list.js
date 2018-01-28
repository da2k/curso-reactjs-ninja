'use strict'

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Play from 'components/play'
import { selectVideoSingle } from 'reducers/video-single/action-creators'

const VideosList = ({ videos, handleClick }) => (
  <Container>
    {Object.keys(videos).map((id) => (
      <Video key={id}>
        <VideoLink href='#' onClick={handleClick(id)}>
          <VideoThumb>
            <PlayStyled />
          </VideoThumb>
          <VideoTitle>{videos[id].title}</VideoTitle>
        </VideoLink>
      </Video>
    ))}
  </Container>
)

const PlayStyled = styled(Play)`
  fill: #999;
  height: 50px;
  transition: all .15s ease-in-out;
  width: 50px;
`

const Video = styled.section`
  &:hover ${PlayStyled} {
    transform: scale(1.5);
  }
`

const VideoLink = styled.a`
  color: inherit;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;

  & ${Video} {
    flex: 1 1 300px;
    margin: 0 5px 5px;
  }
`

const VideoThumb = styled.div`
  align-items: center;
  border: 1px solid #999;
  display: flex;
  height: 150px;
  justify-content: center;
`

const VideoTitle = styled.h2`
  font-size: 18px;
`

const mapStateToProps = (state) => ({
  videos: state.videos
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: (id) => (e) => {
    e.preventDefault()
    dispatch(selectVideoSingle(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VideosList)
