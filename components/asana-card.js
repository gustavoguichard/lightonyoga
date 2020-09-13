import Card from 'components/card'

export default function AsanaCard({ asana }) {
  return (
    <Card
      title={asana.name}
      link={`/asana/${asana.slug}`}
      picture={`/${asana.slug}.png`}
      tagline={asana.meaning}
    />
  )
}
