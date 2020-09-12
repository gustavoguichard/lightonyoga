import filter from 'lodash/filter'

import VariationCard from 'components/variation-card'

export default function HealthyVariations({ variations, asana }) {
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
              <VariationCard
                asana={asana}
                variation={variation}
                key={`beginner-${variation.slug}`}
              />
            ))}
          </div>
        </>
      )}
      {!!menstrualVariations.length && (
        <>
          <h3>Variações para o período menstrual</h3>
          <div className="flex flex-wrap mb-6">
            {menstrualVariations.map((variation) => (
              <VariationCard
                asana={asana}
                variation={variation}
                key={`menstrual-${variation.slug}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
