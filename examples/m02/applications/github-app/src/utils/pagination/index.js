'use strict'

const pagination = ({ total, activePage }) => {
  return Array.from({ length: total }, (_, i) => i + 1)
}

export default pagination
