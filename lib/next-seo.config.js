import { SITE_TITLE, SITE_URL, META_DESCRIPTION } from 'lib/constants'

const titleTemplate = `%s | ${SITE_TITLE}`

const seoConfig = {
  title: SITE_TITLE,
  description: META_DESCRIPTION,
  openGraph: {
    description: META_DESCRIPTION,
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL + '/',
    site_name: SITE_TITLE,
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 1000,
        height: 735,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    // handle: '@luznoyoga',
    // site: '@site',
    cardType: 'summary_large_image',
  },
}

export { titleTemplate }
export { seoConfig }
