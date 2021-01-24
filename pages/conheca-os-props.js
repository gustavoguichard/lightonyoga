import upperFirst from 'lodash/upperFirst'
import Link from 'next/link'

import api from 'lib/api'

import Layout from 'components/layout'

export default function TheProps({ tags }) {
  return (
    <Layout
      title={
        <span>
          Conheça os <em>Props</em>
        </span>
      }
    >
      <div className="max-w-3xl">
        <p>
          Os <em>Props</em> são como chamamos os materiais de apoio para a
          prática de <em>Asanas</em> e <em>Pranayamas</em>.<br />
          Para conhecer e ver cada <em>prop</em> na prática, navegue pelos links
          abaixo.
        </p>
        <ul className="list-disc">
          {tags.map(({ id, name, slug }) => (
            <li key={id} className="mt-0">
              <Link href={`/tag/${slug}`}>
                <a className="text-italic font-semibold">{upperFirst(name)}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const tags = await api.fetch('tags')
  return {
    props: { tags: tags.filter((t) => t.category === 'prop') },
    revalidate: 10,
  }
}
