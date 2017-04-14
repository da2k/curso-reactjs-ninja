'use strict'

import React, { PropTypes } from 'react'

const MarkdownEditor = ({ value, handleChange, getMarkup }) => (
  <div className='editor'>
    <button onClick={() => localStorage.setItem('md', value)}>Salvar</button>
    <textarea value={value} onChange={handleChange} autoFocus />
    <div className='view' dangerouslySetInnerHTML={getMarkup()} />
  </div>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default MarkdownEditor
