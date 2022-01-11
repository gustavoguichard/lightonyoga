import {
  compose,
  join as j,
  reject,
  isBoolean,
  isNil,
  flatten,
} from 'lodash/fp'

const join = (arr: unknown[], decorator = ' ') =>
  arr.filter((a) => a).join(decorator)

const cx = (...args: unknown[]) =>
  compose(j(' '), reject(isBoolean), reject(isNil), flatten)(args)

export { cx, join }
