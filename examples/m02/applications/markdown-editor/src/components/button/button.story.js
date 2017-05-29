'use strict'

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Button from './index'

const stories = storiesOf('Button', module)

stories.addDecorator((story) => (
  <div style={{ display: 'flex', height: 40 }}>
    {story()}
  </div>
))

stories.add('Button default', () => (
  <Button onClick={action('success')}>
    Default button
  </Button>
))

stories.add('Button success', () => (
  <Button onClick={action('success')} kind='success'>
    Success
  </Button>
))

stories.add('Button danger', () => (
  <Button onClick={action('danger')} kind='danger'>
    Danger
  </Button>
))
