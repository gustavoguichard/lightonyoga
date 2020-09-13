import kebabCase from 'lodash/kebabCase'
import map from 'lodash/map'
import Link from 'next/link'

import CategoryLink from './category-link'

export default function CardContent({ family, movements, sanscritWords }) {
  return (
    <dl className="p-4 pb-0 mb-4">
      <dt>Tradução</dt>
      <dd>
        {map(sanscritWords, (item) => (
          <CategoryLink
            key={item.id}
            prefix="glossario"
            id={kebabCase(item.word)}
            description={`${item.word} = ${item.translation}`}
          />
        ))}
      </dd>
      <dt>Classificação</dt>
      <dd>
        <Link href="/family/[slug]" as={`/family/${kebabCase(family.name)}`}>
          <a>
            {family.meaning} (<i>{family.name}</i>)
          </a>
        </Link>
      </dd>
      <dt>Principais movimentos articulares</dt>
      <dd>
        {map(movements, (mov) => (
          <CategoryLink key={mov.id} prefix="movement" {...mov} />
        ))}
      </dd>
    </dl>
  )
}
