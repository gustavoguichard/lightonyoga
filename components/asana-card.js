import Card from 'components/card'

export default function AsanaCard({ asana }) {
  return (
    <Card
      title={asana.name}
      link={`/asana/${asana.slug}`}
      picture={asana.image}
      tagline={asana.meaning}
    />
  )
}
