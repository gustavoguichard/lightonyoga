import api from 'lib/api'

import VariationsList from 'components/variations-list'

export default function VariationsFromTag({ variations, tag, title }) {
  const collection =variations.filter(v => v.tags.map(t => t.id).includes(tag))
  return collection.length ? (
    <>
      <h3>{title}</h3>
      <VariationsList variations={collection} />
    </>
  ) : null
}
