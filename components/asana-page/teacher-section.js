import ContentSection from 'components/content-section'

import List from './list'
import VariationsFromTag from './variations-from-tag'

export default function KramaSection({ asana }) {
  return (
    <>
      <ContentSection>
        <h2>Professores</h2>
        <List
          title="O que é importante observar no aluno"
          items={asana.observe}
        />
        <VariationsFromTag
          variations={asana.variations}
          tag={22}
          title="Como ajustar o aluno"
        />
      </ContentSection>
    </>
  )
}
