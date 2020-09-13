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
          asanas={asana.krama?.preparations}
        />
        <KramaList
          title="Asanas relacionados"
          asanas={asana.krama?.connectedAsanas}
        />
        <KramaList title="Compensações" asanas={asana.krama?.compensations} />
      </ContentSection>
    </>
  )
}

const KramaList = ({ asanas, title }) =>
  asanas?.length ? (
    <>
      <h3>{title}</h3>
      <AsanaList
        hideTitle
        asanas={asanas.map((asana) => ({ ...asana, meaning: asana.why }))}
      />
    </>
  ) : null
