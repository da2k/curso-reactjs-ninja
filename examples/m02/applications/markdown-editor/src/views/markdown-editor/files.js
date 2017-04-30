'use strict'

import React from 'react'

const files = {
  '123': '# Título',
  '234': '# Título 2'
}

const handleOpenFile = (fileId) => () => {
  console.log(fileId)
}

const Files = () => (
  <div className='files-list-container'>
    <h2>Files</h2>

    <ul>
      {Object.keys(files).map((fileId) => (
        <li>
          <button onClick={handleOpenFile(fileId)}>{fileId}</button>
        </li>
      ))}
    </ul>
  </div>
)

export default Files
