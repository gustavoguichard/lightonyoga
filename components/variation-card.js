import Card from 'components/card'

export default function VariationCard({ variation }) {
  return (
    <Card
      pose={variation}
      title={variation.asana.name}
      slug={`${variation.asana.slug}/${variation.slug}`}
      subtitle={variation.name}
      tagline={variation.tagline}
    />
  )
}
