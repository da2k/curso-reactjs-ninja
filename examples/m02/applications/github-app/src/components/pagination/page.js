'use strict'

import React from 'react'

const Dots = ({ className }) => <span className={className}>...</span>

const Page = ({ page, pageLink, onClick }) => {
  const Component = page === '...' ? Dots : 'a'

  const handleClick = !onClick ? null : (e) => {
    e.preventDefault()
    onClick(page)
  }

  return (
    <Component href={pageLink} onClick={handleClick} className='pagination-link'>
      {page}
    </Component>
  )
}

export default Page
