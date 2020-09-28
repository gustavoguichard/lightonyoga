import uniqBy from 'lodash/uniqBy'

import ContentSection from 'components/content-section'

import List from './list'
import VariationsFromTag from './variations-from-tag'

export default function HealthSection({ asana, isLogged }) {
  const { variations } = asana
  return (
    <>
      <ContentSection>
        <h2>Saúde da postura</h2>
        <List title="Benefícios" items={asana.benefits} />
        <List title="Cuidados" items={asana.caution} />
        <List
          title="Contra-indicações"
          items={asana.contraindications}
        />
      </ContentSection>
      <ContentSection>
        <VariationsFromTag
          tag={1}
          variations={asana.variations}
          title="Tornando a postura acessível"
        />
        <VariationsFromTag
          tag={15}
          variations={asana.variations}
          title="Variações para o ciclo menstrual"
        />
        {isLogged && <HealthVariations variations={variations} />}
      </ContentSection>
    </>
  )
}

const HealthVariations = ({ variations }) => {
  const excludedTags = [1, 15]
  const tags = variations.reduce((acc, pose) => {
    const healthTags = pose.tags.filter(t => t.category === 'health' && !excludedTags.includes(t.id))
    return uniqBy([...acc, ...healthTags], 'id')
  }, [])
  return tags.map((tag) => (
        <VariationsFromTag
          key={tag.slug}
          variations={variations}
          tag={tag.id}
          title={`Variações para ${tag.name}`}
        />
  ))
}
