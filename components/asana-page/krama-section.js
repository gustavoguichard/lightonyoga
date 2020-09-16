import AsanaList from 'components/asana-list'
import ContentSection from 'components/content-section'

import VariationsFromTag from './variations-from-tag'

export default function KramaSection({ asana }) {
  return (
    <>
      <ContentSection>
        <h2>Krama - sequenciamento</h2>
        <VariationsFromTag
          asanaId={asana.id}
          tag={21}
          title="Variações preparatórias"
        />
        <KramaList
          title="Posturas preparatórias (Iniciantes)"
          subtitle="Ajudam a ir criando os espaços físicos e mentais e as ações e consciência necessárias para este asana."
          asanas={asana.krama?.preparations}
        />
        <KramaList
          title="Asanas relacionados"
          subtitle="Podem ser combinados e/ou ajudam a compreender conceitos/ações necessárias."
          asanas={asana.krama?.connectedAsanas}
        />
        <KramaList
          title="Compensações"
          subtitle="Ajudam a recuperar de possíveis tensões ou cansaços gerados por este asana."
          asanas={asana.krama?.compensations}
        />
      </ContentSection>
    </>
  )
}

const KramaList = ({ asanas, title, subtitle }) => {
  return asanas?.length ? (
    <>
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
      <AsanaList
        hideTitle
        asanas={asanas.map((asana) => ({ ...asana, meaning: asana.why }))}
      />
    </>
  ) : null
}
