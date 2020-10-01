import Link from 'next/link'

import api from 'lib/api'

import Layout from 'components/layout'
import MainContent from 'components/main-content'
import Tag from 'components/tag'

export default function VariationPage({ variation }) {
  if (!variation?.asana) {
    return 'Loading...'
  }

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
        picture={variation.picture}
        asana={variation}
      >
        <p className="text-xs text-yellow-900 font-semibold p-3 bg-yellow-100 rounded inline-block border-2 border-yellow-200">
          Ver informações completas para:{' '}
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
        <div dangerouslySetInnerHTML={{ __html: variation.content }} />
      </MainContent>
    </Layout>
  )
}


export async function getStaticPaths() {
  const variations = await api.fetch('variations')
  return {
    paths: variations.map((item) => ({ params: { slug: item.asana.slug, variationSlug: item.slug } })),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { variationSlug } = params
  const variation = await api.fetch('variations', variationSlug)
  return {
    props: { variation },
    revalidate: 10,
  }
}
