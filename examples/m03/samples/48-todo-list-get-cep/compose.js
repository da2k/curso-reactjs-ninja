'use strict'

const upper = (x) => x.toUpperCase()
const underscorify = (x) => x.split('').join('_')
const switchValueForX = (value) => (x) =>
  x.replace(new RegExp(value, 'g'), 'x')

console.log(upper('fernando'))
console.log(underscorify('fernando'))

// const upperAndUnderscorify = (x) => upper(underscorify(x))

const compose = (...funcs) => (x) =>
  funcs.reduceRight((v, f) => f(v), x)

const upperAndUnderscorify =
  compose(upper, underscorify, switchValueForX('a'))

console.log(upperAndUnderscorify('fernando'))
