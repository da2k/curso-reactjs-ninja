'use strict'

import React from 'react'

const MarkdownEditorHeader = ({ onSave }) => (
  <header className='editor-header'>
    <button onClick={onSave} className='save'>Salvar</button>
  </header>
)

export default MarkdownEditorHeader
