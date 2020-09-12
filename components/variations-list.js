import VariationCard from 'components/variation-card'

export default function VariationsList({ variations }) {
  return (
    <div className="flex flex-wrap mb-6">
      {variations.map((variation) => (
        <VariationCard
          variation={variation}
          key={`variation-${variation.id}`}
        />
      ))}
    </div>
  )
}
