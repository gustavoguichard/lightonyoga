import * as React from 'react'
import { cx } from 'lib/utils'

const Skeleton = ({ className, ...props }, ref) => {
  return (
    <div
      className={cx(className, 'bg-gray-200 animate-pulse rounded')}
      ref={ref}
      {...props}
    />
  )
}

export default React.forwardRef(Skeleton)
