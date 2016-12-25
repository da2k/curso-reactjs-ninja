'use strict'

import React, { PropTypes } from 'react'
import pagination from 'utils/pagination'
import Page from './page'

import './pagination.css'

const Pagination = ({ total, activePage, pageLink, onClick }) => (
  <ul className='pagination'>
    {pagination({ total, activePage }).map((page, index) => (
      <li key={index} className={`pagination-item ${activePage === page ? 'active' : ''}`}>
        <Page page={page} pageLink={pageLink.replace('%page%', page)} onClick={onClick} />
      </li>
    ))}
  </ul>
)

Pagination.defaultProps = {
  pageLink: '',
  activePage: 1
}

Pagination.propTypes = {
  total: PropTypes.number,
  activePage: PropTypes.number,
  pageLink: PropTypes.string,
  onClick: PropTypes.func
}

export default Pagination
