import get from 'lodash/get'
import { NextSeo } from 'next-seo'

import { seoConfig, titleTemplate } from 'lib/next-seo.config'

export default function SEO({ title, description, ...props }) {
  return (
    <NextSeo
      title={title || seoConfig.title}
      description={description || seoConfig.description}
      titleTemplate={title ? titleTemplate : undefined}
      openGraph={{
        ...seoConfig.openGraph,
        ...get(props, 'openGraph', {}),
        title: get(props, 'openGraph.title') || title,
        description:
          description ||
          get(props, 'openGraph.description', seoConfig.description),
      }}
      twitter={{
        ...seoConfig.twitter,
        ...get(props, 'twitter', {}),
      }}
      {...props}
    />
  )
}
