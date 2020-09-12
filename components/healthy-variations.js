import api from 'lib/api'

import VariationsList from 'components/variations-list'

export default function HealthyVariations({ variations }) {
  return (
    <>
      <hr />
      <ListVariationsFromTag tag={1} title="Tornando a postura acessível" />
      <ListVariationsFromTag
        tag={12}
        title="Variações para o período menstrual"
      />
    </>
  )
}

const ListVariationsFromTag = ({ tag, title }) => {
  const variations = api.listVariations({ tags: [tag] })
  return variations.length ? (
    <>
      <h3>{title}</h3>
      <VariationsList variations={variations} />
    </>
  ) : null
}
