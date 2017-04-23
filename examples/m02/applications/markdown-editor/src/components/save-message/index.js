'use strict'

import React, { PropTypes } from 'react'

const SaveMessage = ({ isSaving }) => (
  isSaving !== null && isSaving !== undefined && (
    <p className='save-message'>
      {isSaving ? 'Salvando...' : 'Salvo!'}
    </p>
  )
)

SaveMessage.propTypes = {
  isSaving: PropTypes.bool
}

export default SaveMessage
