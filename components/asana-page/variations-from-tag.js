import api from 'lib/api'

import VariationsList from 'components/variations-list'

export default function VariationsFromTag({ asanaId, tag, title }) {
  const variations = []//api.listVariations({ asanaId, tags: [tag] })

  return variations.length ? (
    <>
      <h3>{title}</h3>
      <VariationsList variations={variations} />
    </>
  ) : null
}
