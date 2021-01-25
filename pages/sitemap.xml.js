import forEach from 'lodash/forEach'
import { SitemapStream, streamToPromise } from 'sitemap'

import api from 'lib/api'
import { SITE_URL } from 'lib/constants'

const pages = {
  'lista-de-asanas': ['weekly', 0.8],
  'lista-de-props': ['weekly', 0.5],
  'movimentos-articulares': ['monthly', 0.6],
  glossario: ['weekly', 0.5],
  'familias-dos-asanas': ['yearly', 0.4],
  'quem-somos': ['monthly', 0.3],
}

const Sitemap = ({ xml }) => xml

export async function getServerSideProps({ res }) {
  try {
    const smStream = new SitemapStream({
      hostname: SITE_URL + '/',
      cacheTime: 600000,
    })

    const variations = await api.fetch('variations')
    const asanas = await api.fetch('asanas')
    const movements = await api.fetch('movements')
    const families = await api.fetch('families')
    const words = await api.fetch('words')
    const tags = await api.fetch('tags')

    smStream.write({
      url: `/`,
      changefreq: 'daily',
      priority: 1.0,
    })

    asanas.forEach((asana) => {
      smStream.write({
        url: `/asana/${asana.slug}`,
        changefreq: 'daily',
        priority: 0.9,
        img: {
          url: asana.picture,
        },
      })
    })

    variations.forEach((variation) => {
      smStream.write({
        url: `/asana/${variation.asana.slug}/${variation.slug}`,
        changefreq: 'daily',
        priority: 0.9,
        img: {
          url: variation.picture,
        },
      })
    })

    forEach(pages, ([freq, priority], slug) => {
      smStream.write({
        url: `/${slug}`,
        changefreq: freq || 'weekly',
        priority: priority || 0.6,
      })
    })

    movements.forEach((movement) => {
      smStream.write({
        url: `/anatomia/${movement.slug}`,
        changefreq: 'monthly',
        priority: 0.6,
      })
    })

    families.forEach((family) => {
      smStream.write({
        url: `/familia/${family.slug}`,
        changefreq: 'monthly',
        priority: 0.5,
      })
    })

    words.forEach((word) => {
      smStream.write({
        url: `/glossario/${word.slug}`,
        changefreq: 'monthly',
        priority: 0.5,
      })
    })

    tags.forEach((tag) => {
      smStream.write({
        url: `/tag/${tag.slug}`,
        changefreq: 'weekly',
        priority: 0.7,
      })
    })

    // End sitemap stream
    smStream.end()

    // XML sitemap string
    const xml = (await streamToPromise(smStream)).toString()

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })
    // Display output to user
    res.end(xml)
    return { props: { xml } }
  } catch (e) {
    // eslint-disable-next-line
    console.log(e)
    res.end(JSON.stringify(e))
    return { props: { xml: null } }
  }
}

export default Sitemap
