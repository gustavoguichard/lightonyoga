import { forwardRef } from 'react'

import { classes } from 'lib/utils'

const Skeleton = ({ className, ...props }, ref) => {
  const cx = classes(className, 'bg-gray-200 animate-pulse rounded')
  return <div className={cx} ref={ref} {...props} />
}

export default forwardRef(Skeleton)
