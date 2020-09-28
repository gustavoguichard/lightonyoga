import Link from 'next/link'

import Layout from 'components/layout'
import MainContent from 'components/main-content'
import Tag from 'components/tag'

export default function VariationPage({ variation }) {
  return (
    <Layout
      title={variation.asana.name}
      subtitle={
        <span className="font-semibold">
          <span className="text-sm font-normal">Variação:</span>{' '}
          {variation.name}
        </span>
      }
    >
      <MainContent
        videos={variation.videos}
        picture={variation.image}
        asana={variation}
      >
        <p className="text-xs">
          Ir para:{' '}
          <Link href="/asana/[slug]" as={`/asana/${variation.asana.slug}`}>
            <a>{variation.asana.name}</a>
          </Link>
        </p>
        <p className="text-xl leading-tight">{variation.tagline}</p>
        <div className="-mt-2 mb-2">
          {variation.tags.map((tag) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </div>
        <h3>Instruções</h3>
        <div dangerouslySetInnerHTML={{ __html: variation.content?.body }} />
      </MainContent>
    </Layout>
  )
}
