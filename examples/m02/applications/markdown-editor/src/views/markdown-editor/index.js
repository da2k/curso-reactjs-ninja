'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'

const MarkdownEditor = ({ value, handleChange, getMarkup, textareaRef, ...props }) => (
  <section className='editor'>
    <Header {...props} />
    <textarea value={value} onChange={handleChange} autoFocus ref={textareaRef} />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}

export default MarkdownEditor
