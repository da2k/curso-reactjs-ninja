'use strict'

const some = (arr, func) => {
  return (function someInternal (arrayInternal, counter) {
    const [head, ...tail] = arrayInternal

    return arrayInternal.length === 0
      ? false
      : func(head, counter, arr)
        ? true
        : someInternal(tail, counter + 1)
  })(arr, 0)
}

export default some
