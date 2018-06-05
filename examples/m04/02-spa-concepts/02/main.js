;(function () {
  'use strict'

  var $links = document.querySelectorAll('a')
  var $h1 = document.querySelector('h1')

  $links.forEach(function ($link) {
    $link.addEventListener('click', handleClick, false)
  })

  function handleClick (e) {
    e.preventDefault()
    var state = {}
    var title = ''
    var url = e.target.getAttribute('href')
    history.pushState(state, title, url)
    $h1.textContent = url
  }
})()
