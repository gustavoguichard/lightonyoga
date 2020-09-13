import AsanaList from 'components/asana-list'
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
          items={asana.teachers?.observe}
        />
        <VariationsFromTag
          asanaId={asana.id}
          tag={22}
          title="Como ajustar o aluno"
        />
      </ContentSection>
    </>
  )
}
