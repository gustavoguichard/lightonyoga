import { useLogged } from 'lib/session'

import VariationCard from 'components/variation-card'

export default function VariationsList({ variations }) {
  const isLogged = useLogged()
  return (
    <div className="flex flex-wrap w-full mb-6">
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
