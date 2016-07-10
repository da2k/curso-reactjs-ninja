'use strict'

import React from 'react'
import Button from './button'

const LikeButton = () => (
  <Button handleClick={() => alert('like')}>
    Curtir
  </Button>
)

export default LikeButton
