import { useEffect } from 'react'

import { intersectionPolyfill } from 'lib/fx'

import '../styles/tailwind.css'
import '../styles/new.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    intersectionPolyfill()
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
