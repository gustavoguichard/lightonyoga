import session from 'lib/session'

import VariationCard from 'components/variation-card'

export default function VariationsList({ variations }) {
  const isLogged = session.isLogged()
  return (
    <div className="flex flex-wrap mb-6">
      {variations
        .filter((item) => isLogged || !item.premium)
        .map((variation) => (
          <VariationCard
            variation={variation}
            key={`variation-${variation.id}`}
          />
        ))}
    </div>
  )
}
