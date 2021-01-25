import sortBy from 'lodash/sortBy'

import AsanaCard from 'components/asana-card'

export default function AsanaList({ asanas, hideTitle }) {
  const list = sortBy(asanas, 'name')
  return (
    <div className="w-full">
      {hideTitle || (
        <h3 className="text-lg font-semibold text-gray-500">Asanas</h3>
      )}
      <div className="flex flex-wrap">
        {list.length ? (
          list.map((asana) => <AsanaCard key={asana.slug} asana={asana} />)
        ) : (
          <p>Nada encontrado</p>
        )}
      </div>
    </div>
  )
}
