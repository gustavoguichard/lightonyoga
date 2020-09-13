import api from 'lib/api'

import VariationsList from 'components/variations-list'

export default function HealthyVariations({ asanaId }) {
  return (
    <>
      <hr />
      <ListVariationsFromTag
        asanaId={asanaId}
        tag={1}
        title="Tornando a postura acessível"
      />
      <ListVariationsFromTag
        asanaId={asanaId}
        tag={12}
        title="Variações para o período menstrual"
      />
    </>
  )
}

const ListVariationsFromTag = ({ asanaId, tag, title }) => {
  const variations = api.listVariations({ asanaId, tags: [tag] })
  return variations.length ? (
    <>
      <h3>{title}</h3>
      <VariationsList variations={variations} />
    </>
  ) : null
}
