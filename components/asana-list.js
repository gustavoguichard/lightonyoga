import AsanaCard from 'components/asana-card'

export default function AsanaList({ asanas, hideTitle }) {
  return (
    <div className="w-full">
      {hideTitle || <h3>Asanas</h3>}
      <div className="flex flex-wrap">
        {asanas.map((asana) => (
          <AsanaCard key={asana.name} asana={asana} />
        ))}
      </div>
    </div>
  )
}
