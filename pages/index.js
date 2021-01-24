import { useState, useEffect } from 'react'
import api from 'lib/api'
import shuffle from 'lodash/shuffle'
import take from 'lodash/take'
import Link from 'next/link'

import Layout from 'components/layout'
import MainSearch from 'components/main-search'
import AsanaCard from 'components/asana-card'
import VariationCard from 'components/variation-card'

export default function Home({ asanas, tags, variations }) {
  const postures = [...asanas, ...variations]
  const [list, setList] = useState([])
  useEffect(() => {
    setList(take(shuffle(postures), 4))
  }, [])
  return (
    <Layout>
      <div className="flex mt-8 flex-col items-center">
        <MainSearch asanas={asanas} tags={tags} />
        <h4 className="text-sm font-semibold self-start pl-4 mb-0 text-gray-600">
          Conheça novas posturas:
        </h4>
        <div className="flex flex-wrap w-full">
          {list.map((asana) => {
            const isVariation = !!asana.asana
            return isVariation ? (
              <VariationCard key={asana.id + asana.name} variation={asana} />
            ) : (
              <AsanaCard key={asana.id + asana.name} asana={asana} />
            )
          })}
        </div>
        <Link href="/lista-de-asanas">
          <a className="text-sm font-semibold self-start pl-4 mt-0 mb-8">
            Ver mais
          </a>
        </Link>
        <main className="md:w-7/12 md:ml-8">
          <blockquote>
            Eu desenvolvi os props para que as pessoas possam se beneficiar.
            Milhares estão se beneficiando e continuarão se beneficiando deles.
            Deus alguma vez registrou uma patente para sua criação? Então que
            direito eu, um mero mortal, tenho para fazer isso?{' '}
            <i>&minus; B.K.S. Iyengar</i>
          </blockquote>
        </main>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const asanas = await api.fetch('asanas')
  const tags = await api.fetch('tags')
  return {
    props: { asanas, tags },
    revalidate: 10,
  }
}
