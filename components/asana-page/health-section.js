import api from 'lib/api'

import ContentSection from 'components/content-section'
import VariationsList from 'components/variations-list'

import List from './list'

export default function HealthSection({ asana }) {
  return (
    <>
      <ContentSection>
        <h2>Saúde da postura</h2>
        <List title="Benefícios" items={asana.health?.benefits} />
        <List title="Cuidados" items={asana.health?.caution} />
        <List
          title="Contra-indicações"
          items={asana.health?.contraindications}
        />
      </ContentSection>
      <ContentSection>
        <ListVariationsFromTag
          asanaId={asana.id}
          tag={1}
          title="Tornando a postura acessível"
        />
        <ListVariationsFromTag
          asanaId={asana.id}
          tag={12}
          title="Variações para o período menstrual"
        />
      </ContentSection>
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
