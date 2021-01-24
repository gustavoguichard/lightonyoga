import map from 'lodash/map'
import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'

export const isClient = typeof window === 'object'

export const join = (arr, decorator = ' ') =>
  arr.filter((a) => a).join(decorator)

export const classes = (...args) => {
  const result = map(args, (rule) => {
    if (isArray(rule)) {
      return classes(...rule)
    }
    if (isObject(rule)) {
      return classes(map(rule, (value, key) => (value ? key : false)))
    }
    return typeof rule === 'string' ? rule : false
  })
  return join(result)
}
