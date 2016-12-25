'use strict'

import React, { PropTypes } from 'react'
import Search from 'components/search'
import UserInfo from 'components/user-info'
import Actions from 'components/actions'
import Repos from 'components/repos'
import './app.css'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred,
  handlePagination
}) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    <div className='repos-container'>
      {!!repos.length &&
        <Repos
          className='repos'
          title='Repositórios:'
          repos={repos}
          handlePagination={(clicked) => handlePagination('repos', clicked)}
        />
      }

      {!!starred.length &&
        <Repos
          className='starred'
          title='Favoritos:'
          repos={starred}
          handlePagination={(clicked) => handlePagination('starred', clicked)}
        />
      }
    </div>
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
