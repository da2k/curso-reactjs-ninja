'use strict'

import mainReduce from './main-reduce'
import reverse from '../reverse/reverse'

const reduceRight = (arr, ...params) => mainReduce(reverse(arr), ...params)

export default reduceRight
