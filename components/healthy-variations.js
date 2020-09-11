import filter from 'lodash/filter'

import VariationCard from 'components/variation-card'

import allVariations from 'data/variations.js'

export default function HealthyVariations({ asana }) {
  const variations = filter(
    allVariations,
    (posture) => posture.asana === asana.name,
  )
  const beginnerVariations = filter(variations, (posture) =>
    posture.tags.includes('Iniciante'),
  )
  const menstrualVariations = filter(variations, (posture) =>
    posture.tags.includes('Período'),
  )
  return (
    <div>
      <hr />
      {!!beginnerVariations.length && (
        <>
          <h3>Tornando a postura acessível</h3>
          <div className="flex flex-wrap mb-6">
            {beginnerVariations.map((variation) => (
              <VariationCard variation={variation} key={variation.title} />
            ))}
          </div>
        </>
      )}
      {!!menstrualVariations.length && (
        <>
          <h3>Variações para o período menstrual</h3>
          <div className="flex flex-wrap mb-6">
            {menstrualVariations.map((variation) => (
              <VariationCard variation={variation} key={variation.title} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
