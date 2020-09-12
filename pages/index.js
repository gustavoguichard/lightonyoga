import api from 'lib/api'

import Layout from 'components/layout'
import MainSearch from 'components/main-search'

export default function Home({ asanas, tags }) {
  return (
    <Layout title="Light on Yoga">
      <div className="md:flex flex-col items-center">
        <MainSearch asanas={asanas} tags={tags} />
        <main className="md:w-7/12 md:ml-8">
          <h1>Manifesto</h1>
          <p>
            Quando perguntaram ao Guruji o porquê dele não registrar patente dos
            props ele disse:
          </p>
          <blockquote>
            Eu desenvolvi os props para que as pessoas possam se beneficiar.
            Milhares estão se beneficiando e continuarão se beneficiando deles.
            Deus alguma vez registrou uma patente para sua criação? Então que
            direito eu, um mero mortal, tenho para fazer isso?
          </blockquote>
          <p>Também sabemos que Geetaji um dia falou:</p>
          <blockquote>
            A afirmação de Guruji 'dar não nos empobrece, reter não nos
            enriquece' não apenas deve ser compreendida por nós, mas também
            praticada.
          </blockquote>
        </main>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const asanas = api.listAsanas()
  const tags = api.listTags()
  return {
    props: { asanas, tags },
  }
}
