'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Title from './index'

const stories = storiesOf('Title', module)

stories.add('without props', () => (
  <Title>Main title</Title>
))
