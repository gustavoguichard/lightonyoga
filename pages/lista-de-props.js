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
      subtitle="Os Props são como chamamos os materiais de apoio para a prática de Asanas e Pranayamas"
      seo={{
        description:
          'Biblioteca de Props por ordem alfabética. Descubra o que são Props, para que servem e exemplos de cada prop em uso.',
      }}
    >
      <div className="md:flex flex-grow">
        <div className="md:w-8/12 md:order-2">
          <p>
            Após anos ensinando os asanas em sua forma clássica, sem nenhum tipo
            de suporte, BKS Iyengar, sabiamente, notou que para alguns corpos o
            uso de apoio ajudava as pessoas a adquirir confiança e estabilidade
            mental.
          </p>
          <p>
            Desde então, desenvolveu uma série de materiais conhecidos como
            props para que todos tenham acesso aos benefícios do yoga.
          </p>
          <p>
            Cada corpo é único, o que deve ser atingido de forma igual por todos
            os praticantes é a percepção de presença, força interna e
            tranquilidade.
          </p>
          <p>
            Nesse sentido os props possibilitam que dentro das diferentes
            condições e nível dos praticantes o yoga seja experienciado.
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
