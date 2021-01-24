import React from 'react'
import { useInView } from 'react-intersection-observer'

import Skeleton from 'components/skeleton'

export default function Img({
  src,
  alwaysShow,
  Component = 'img',
  className,
  hideSpinner,
  ...props
}) {
  const [ref, visible] = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  const { width, height } = props
  return (
    <>
      {visible || alwaysShow ? (
        <Component ref={ref} className={className} src={src} {...props} />
      ) : (
        <Skeleton
          ref={ref}
          width={width}
          height={height}
          style={{ visibility: hideSpinner ? 'hidden' : 'visible' }}
          className={className}
        />
      )}
    </>
  )
}
