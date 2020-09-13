import AsanaCard from 'components/asana-card'

export default function AsanaList({ asanas }) {
  return (
    <div className="w-full">
      <h3>Asanas</h3>
      <div className="flex flex-wrap">
        {asanas.map((asana) => (
          <AsanaCard
            key={asana.name}
            link={`/asana/${asana.slug}`}
            picture={`/${asana.slug}.png`}
            title={asana.name}
            tagline={asana.meaning}
          />
        ))}
      </div>
    </div>
  )
}
