'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

const initialReposState = {
  repos: [],
  pagination: {
    total: 1,
    activePage: 1
  }
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: initialReposState,
      starred: initialReposState,
      isFetching: false
    }

    this.perPage = 3
    this.handleSearch = this.handleSearch.bind(this)
  }

  getGitHubApiUrl (username, type, page = 1) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}?per_page=${this.perPage}&page=${page}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })

      ajax().get(this.getGitHubApiUrl(value))
      .then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: initialReposState,
          starred: initialReposState
        })
      })
      .always(() => this.setState({ isFetching: false }))
    }
  }

  getRepos (type, page) {
    return (e) => {
      const username = this.state.userinfo.login
      ajax().get(this.getGitHubApiUrl(username, type, page))
        .then((result, xhr) => {
          const linkHeader = xhr.getResponseHeader('Link') || ''
          const totalPagesMatch = linkHeader.match(/&page=(\d+)>; rel="last/)

          this.setState({
            [type]: {
              repos: result.map((repo) => ({
                name: repo.name,
                link: repo.html_url
              })),
              pagination: {
                total: totalPagesMatch ? +totalPagesMatch[1] : this.state[type].pagination.total,
                activePage: page
              }
            }
          })
        })
    }
  }

  render () {
    return <AppContent
      {...this.state}
      handleSearch={this.handleSearch}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
      handlePagination={(type, page) => this.getRepos(type, page)()}
    />
  }
}

export default App
