import Card from 'components/card'

export default function AsanaCard({ asana }) {
  return <Card pose={asana} title={asana.name} tagline={asana.meaning} />
}
