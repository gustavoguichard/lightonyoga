import upperFirst from 'lodash/upperFirst'
import Link from 'next/link'

import api from 'lib/api'

import Layout from 'components/layout'

export default function TheProps({ tags }) {
  return (
    <Layout
      title={
        <span>
          Lista de <em>Props</em>
        </span>
      }
    >
      <div className="md:flex flex-grow">
        <div className="md:w-8/12 md:order-2">
          <p>
            Os <em>Props</em> são como chamamos os materiais de apoio para a
            prática de <em>Asanas</em> e <em>Pranayamas</em>.<br />
            Para conhecer e ver cada <em>prop</em> na prática, navegue pelos
            links abaixo.
          </p>
          <blockquote>
            Eu desenvolvi os props para que as pessoas possam se beneficiar.
            Milhares estão se beneficiando e continuarão se beneficiando deles.
            Deus alguma vez registrou uma patente para sua criação? Então que
            direito eu, um mero mortal, tenho para fazer isso?{' '}
            <i>&minus; B.K.S. Iyengar</i>
          </blockquote>
        </div>
        <div className="md:w-4/12">
          <ul className="list-disc pl-5">
            {tags.map(({ id, name, slug }) => (
              <li key={id} className="mt-0">
                <Link href={`/tag/${slug}`}>
                  <a className="text-italic font-semibold">
                    {upperFirst(name)}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
