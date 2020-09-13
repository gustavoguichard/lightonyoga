import api from 'lib/api'

import AsanaPage from 'components/asana-page'
import VariationPage from 'components/variation-page'

export default function Asana({ asana, variation, ...props }) {
  if (!asana) {
    return 'Loading...'
  }
  return variation ? (
    <VariationPage variation={variation} />
  ) : (
    <AsanaPage asana={asana} {...props} />
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
  const variations = await api.listVariations({ asanaId: asana.id })
  const variation = variationSlug
    ? await api.getVariationBySlug(variationSlug)
    : null
  const family = await api.getFamily(asana?.familyId)
  const movements = await api.listMovements(asana.movements)
  const sanscritWords = await api.listGlossary(asana.sanscritWords)
  return {
    props: { family, asana, variation, variations, movements, sanscritWords },
  }
}
