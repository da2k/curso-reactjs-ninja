'use strict'

const filter = (arr, func) => {
  return (function filterInternal (arrayInternal, counter) {
    const [head, ...tail] = arrayInternal

    return arrayInternal.length === 0
      ? []
      : (func(head, counter, arr) ? [head] : []).concat(filterInternal(tail, counter + 1))
  })(arr, 0)
}

export default filter
