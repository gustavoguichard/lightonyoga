import map from 'lodash/map'
import Link from 'next/link'

import CategoryLink from './category-link'

export default function CardContent({ family, movements, words }) {
  return (
    <dl className="p-4 pb-0 mb-4">
      <dt>Tradução</dt>
      <dd>
        {map(words, (item) => (
          <CategoryLink
            key={item.slug}
            prefix="glossario"
            id={item.slug}
            name={`${item.name} = ${item.translation}`}
          />
        ))}
      </dd>
      <dt>Classificação</dt>
      <dd>
        <Link href="/familia/[slug]" as={`/familia/${family.slug}`}>
          <a>
            {family.translation} (<i>{family.name}</i>)
          </a>
        </Link>
      </dd>
      <dt>Principais movimentos articulares</dt>
      <dd>
        {map(movements, (mov) => (
          <CategoryLink
            key={mov.id}
            prefix="anatomia"
            {...mov}
            id={mov.slug}
          />
        ))}
      </dd>
    </dl>
  )
}
