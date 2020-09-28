import api from 'lib/api'

import ContentSection from 'components/content-section'

import List from './list'
import VariationsFromTag from './variations-from-tag'

export default function HealthSection({ asana, isLogged }) {
  const tags = []//api.listTags()
  const excludedTags = [1, 12]
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
        <VariationsFromTag
          asanaId={asana.id}
          tag={1}
          title="Tornando a postura acessível"
        />
        <VariationsFromTag
          asanaId={asana.id}
          tag={12}
          title="Variações para o ciclo menstrual"
        />
        {isLogged &&
          tags
            .filter(
              (tag) => !excludedTags.includes(tag.id) && tag.type === 'health',
            )
            .map((tag) => (
              <VariationsFromTag
                key={tag.id}
                asanaId={asana.id}
                tag={tag.id}
                title={`Variações para ${tag.name}`}
              />
            ))}
      </ContentSection>
    </>
  )
}
