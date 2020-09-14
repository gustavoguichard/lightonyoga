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
  const asanas = await api.listAsanas()
  return {
    paths: asanas.map((asana) => ({ params: { slug: [asana.slug] } })),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const [asanaSlug, variationSlug] = slug
  const asana = await api.getAsanaBySlug(asanaSlug)
  const variation = variationSlug
    ? await api.getVariationBySlug(variationSlug, asana.id)
    : null
  return {
    props: { asana, variation },
  }
}
