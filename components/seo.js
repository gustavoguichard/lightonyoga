import get from 'lodash/get'
import { NextSeo } from 'next-seo'

import defaultConfig, { titleTemplate } from 'lib/next-seo.config'

export default function SEO({ title, description, ...props }) {
  return (
    <NextSeo
      title={title || defaultConfig.title}
      description={description || defaultConfig.description}
      titleTemplate={title ? titleTemplate : undefined}
      openGraph={{
        ...defaultConfig.openGraph,
        ...get(props, 'openGraph', {}),
        title: get(props, 'openGraph.title') || title,
        description: description ||
          get(props, 'openGraph.description', defaultConfig.description),
      }}
      twitter={{
        ...defaultConfig.twitter,
        ...get(props, 'twitter', {}),
      }}
      {...props} />
  )
}
