import { isClient } from 'lib/utils'

export const intersectionPolyfill = async () => {
  if (isClient && typeof window.IntersectionObserver === 'undefined') {
    await require('intersection-observer')
  }
}
