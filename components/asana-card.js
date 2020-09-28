import Card from 'components/card'

export default function AsanaCard({ asana }) {
  return <Card pose={asana} slug={asana.slug} title={asana.name} tagline={asana.translation} />
}
