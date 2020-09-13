import AsanaCard from 'components/asana-card'

export default function VariationCard({ variation }) {
  return (
    <AsanaCard
      title={variation.asana.name}
      subtitle={variation.title}
      link={`/asana/${variation.asana.slug}/${variation.slug}`}
      picture={`/variations/${variation.id}.png`}
      tagline={variation.tagline}
    />
  )
}
