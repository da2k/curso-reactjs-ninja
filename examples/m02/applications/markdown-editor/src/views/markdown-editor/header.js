'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

const MarkdownEditorHeader = ({ title, isSaving, handleRemove, handleCreate }) => (
  <header className='editor-header'>
    <input type='text' value={title} />
    <SaveMessage isSaving={isSaving} />

    <Button onClick={handleCreate} kind='success'>
      Criar novo
    </Button>

    <Button onClick={handleRemove} kind='danger'>
      Remover
    </Button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
