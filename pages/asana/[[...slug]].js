import api from 'lib/api'

import AsanaPage from 'components/asana-page'
import VariationPage from 'components/variation-page'

export default function Asana({ asana, variation }) {
  if (!asana) {
    return 'Loading...'
  }
  return variation ? (
    <VariationPage variation={variation} />
  ) : (
    <AsanaPage asana={asana} />
  )
}

export async function getStaticPaths() {
  const asanas = await api.fetch('asanas')
  const variations = await api.fetch('variations')
  const slugs = [
    ...asanas.map((a) => a.slug),
    ...variations.map((v) => `${v.asana.slug}/${v.slug}`),
  ]
  return {
    paths: slugs.map((slug) => ({ params: { slug: [slug] } })),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const [asanaSlug, variationSlug] = slug
  const asana = await api.fetch('asanas', asanaSlug)
  const variation = variationSlug
    ? await api.fetch('variations', variationSlug)
    : null
  return {
    props: { asana, variation },
    revalidate: 10,
  }
}
