import Card from 'components/card'

export default function VariationCard({ variation }) {
  return (
    <Card
      title={variation.asana.name}
      subtitle={variation.name}
      link={`/asana/${variation.asana.slug}/${variation.slug}`}
      picture={`/variations/${variation.id}.png`}
      tagline={variation.tagline}
    />
  )
}
