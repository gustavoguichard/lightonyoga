import ContentSection from 'components/content-section'
import KramaList from 'components/krama-list'

import VariationsFromTag from './variations-from-tag'

export default function KramaSection({ asana }) {
  return (
    <>
      <ContentSection>
        <h2>Krama - sequenciamento</h2>
        <VariationsFromTag
          variations={asana.variations}
          tag={21}
          title="Variações preparatórias"
        />
        <KramaList
          title="Posturas preparatórias (Iniciantes)"
          subtitle="Ajudam a ir criando os espaços físicos e mentais e as ações e consciência necessárias para este asana."
          kind="preparation"
          asana={asana}
        />
        <KramaList
          title="Asanas relacionados"
          subtitle="Podem ser combinados e/ou ajudam a compreender conceitos/ações necessárias."
          kind="connected"
          asana={asana}
        />
        <KramaList
          title="Compensações"
          subtitle="Ajudam a recuperar de possíveis tensões ou cansaços gerados por este asana."
          kind="compensation"
          asana={asana}
        />
      </ContentSection>
    </>
  )
}
